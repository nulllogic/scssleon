/**
 * @name 16Blocks JS loader and configurator
 * @author Vladimir Lukyanov <vladimir@liikyanov.ru>
 * @website www.nulllogic.net
 * @version 0.1.0
 */

// create-stylesheet 0.2.1
// Andrew Wakeling <andrew.wakeling@gmail.com>
// create-stylesheet may be freely distributed under the MIT license.
var _stylesheet = {};
/**
 * For awareness of KB262161, if 31 or more total stylesheets exist when invoking appendStyleSheet, insertStyleSheetBefore or replaceStyleSheet, an error will be thrown in ANY browser.
 * If you really want to disable this error (for non-IE), set this flag to true.
 *
 * Note: Once you hit 31 stylesheets in IE8 & IE9, you will be unable to create any new stylesheets successfully (regardless of this setting) and this will ALWAYS cause an error.
 */
_stylesheet.ignoreKB262161 = false;

/**
 * Create an empty stylesheet and insert it into the DOM before the specified node. If no node is specified, then it will be appended at the end of the head.
 *
 * @param node - DOM element
 * @param callback - function(err, style)
 */
function insertEmptyStyleBefore(node, callback) {
	var style = document.createElement('style');
	style.setAttribute('type', 'text/css');
	var head = document.getElementsByTagName('head')[0];
	if (node) {
		head.insertBefore(style, node);
	} else {
		head.appendChild(style);
	}
	if (style.styleSheet && style.styleSheet.disabled) {
		head.removeChild(style);
		return callback('Unable to add any more stylesheets because you have exceeded the maximum allowable stylesheets. See KB262161 for more information.');
	}
	callback(null, style);
}

/**
 * Set the CSS text on the specified style element.
 * @param style
 * @param css
 * @param callback - function(err)
 */
function setStyleCss(style, css, callback) {
	try {
		// Favor cssText over textContent as it appears to be slightly faster for IE browsers.
		if (style.styleSheet) {
			style.styleSheet.cssText = css;
		} else if ('textContent' in style) {
			style.textContent = css;
		} else {
			style.appendChild(document.createTextNode(css));
		}
		return callback(null);
	} catch (e) {
		// Ideally this should never happen but there are still obscure cases with IE where attempting to set cssText can fail.
		callback(e);
	}
}

/**
 * Remove the specified style element from the DOM unless it's not in the DOM already.
 *
 * Note: This isn't doing anything special now, but if any edge-cases arise which need handling (e.g. IE), they can be implemented here.
 * @param node
 */
function removeStyleSheet(node) {
	if (node.tagName === 'STYLE' && node.parentNode) {
		node.parentNode.removeChild(node);
	}
}

/**
 * Create a stylesheet with the specified options.
 * @param options - options object. e.g. {ignoreKB262161: true, replace: null, css: 'body {}' }
 * @param callback - function(err, style)
 *
 * options
 * - css; The css text which will be used to create the new stylesheet.
 * - replace; Specify a style element which will be deleted and the new stylesheet will take its place. This overrides the 'insertBefore' option.
 * - insertBefore; If specified, the new stylesheet will be inserted before this DOM node. If this value is null or undefined, then it will be appended to the head element.
 */
function createStyleSheet(options, callback) {
	if (!_stylesheet.ignoreKB262161 && document.styleSheets.length >= 31) {
		callback('Unable to add any more stylesheets because you have exceeded the maximum allowable stylesheets. See KB262161 for more information.');
	}

	insertEmptyStyleBefore(options.replace ? options.replace.nextSibling : options.insertBefore, function (err, style) {
		if (err) {
			callback(err);
		} else {
			setStyleCss(style, options.css || "", function (err) {
				if (err) {
					removeStyleSheet(style);
					callback(err);
				} else {
					// TODO: If we want to transfer any attributes from an existing style node, this is the time and place to do it.
					if (options.replace) {
						removeStyleSheet(options.replace);
					}
					callback(null, style);
				}
			});
		}
	});
}

_stylesheet = {
	appendStyleSheet: function (css, callback) {
		createStyleSheet({
			css: css
		}, callback);
	},
	insertStyleSheetBefore: function (node, css, callback) {
		createStyleSheet({
			insertBefore: node,
			css: css
		}, callback);
	},
	replaceStyleSheet: function (node, css, callback) {
		createStyleSheet({
			replace: node,
			css: css
		}, callback);
	},
	removeStyleSheet: removeStyleSheet
};

(function (window, document) {
	'use strict';

	var head = document.head || document.getElementsByTagName('head')[0];
	var storagePrefix = 'bag-';
	var defaultExpiration = 5000;
	var inBasket = [];

	var addLocalStorage = function (key, storeObj) {
		try {
			localStorage.setItem(storagePrefix + key, JSON.stringify(storeObj));
			return true;
		} catch (e) {
			if (e.name.toUpperCase().indexOf('QUOTA') >= 0) {
				var item;
				var tempScripts = [];

				for (item in localStorage) {
					if (item.indexOf(storagePrefix) === 0) {
						tempScripts.push(JSON.parse(localStorage[item]));
					}
				}

				if (tempScripts.length) {
					tempScripts.sort(function (a, b) {
						return a.stamp - b.stamp;
					});

					loader.remove(tempScripts[0].key);

					return addLocalStorage(key, storeObj);

				} else {
					// no files to remove. Larger than available quota
					return;
				}

			} else {
				// some other error
				return;
			}
		}

	};

	var getUrl = function (url) {
		var promise = new RSVP.Promise(function (resolve, reject) {

			var xhr = new XMLHttpRequest();
			xhr.open('GET', url);

			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (( xhr.status === 200 ) ||
						( ( xhr.status === 0 ) && xhr.responseText )) {
						resolve({
							content: xhr.responseText,
							type: xhr.getResponseHeader('content-type')
						});
					} else {
						reject(new Error(xhr.statusText));
					}
				}
			};

			// By default XHRs never timeout, and even Chrome doesn't implement the
			// spec for xhr.timeout. So we do it ourselves.
			setTimeout(function () {
				if (xhr.readyState < 4) {
					xhr.abort();
				}
			}, loader.timeout);

			xhr.send();
		});

		return promise;
	};

	var saveUrl = function (obj) {
		return getUrl(obj.url).then(function (result) {
			var storeObj = wrapStoreData(obj, result);

			if (!obj.skipCache) {
				addLocalStorage(obj.key, storeObj);
			}

			return storeObj;
		});
	};

	var wrapStoreData = function (obj, data) {
		var now = +new Date();
		obj.data = data.content;
		obj.originalType = data.type;
		obj.type = obj.type || data.type;
		obj.skipCache = obj.skipCache || false;
		obj.stamp = now;
		obj.expire = now + ( ( obj.expire || defaultExpiration ) * 60 * 60 * 1000 );

		return obj;
	};

	var isCacheValid = function (source, obj) {
		return !source ||
			source.expire - +new Date() < 0 ||
			obj.unique !== source.unique ||
			(loader.isValidItem && !loader.isValidItem(source, obj));
	};

	var handleStackObject = function (obj) {
		var source, promise, shouldFetch;

		if (!obj.url) {
			return;
		}

		obj.key = ( obj.key || obj.url );
		source = loader.get(obj.key);

		obj.execute = obj.execute !== false;

		shouldFetch = isCacheValid(source, obj);

		if (obj.live || shouldFetch) {
			if (obj.unique) {
				// set parameter to prevent browser cache
				obj.url += ( ( obj.url.indexOf('?') > 0 ) ? '&' : '?' ) + 'bag-unique=' + obj.unique;
			}
			promise = saveUrl(obj);

			if (obj.live && !shouldFetch) {
				promise = promise
					.then(function (result) {
						// If we succeed, just return the value
						// RSVP doesn't have a .fail convenience method
						return result;
					}, function () {
						return source;
					});
			}
		} else {
			source.type = obj.type || source.originalType;
			source.execute = obj.execute;
			promise = new RSVP.Promise(function (resolve) {
				resolve(source);
			});
		}

		return promise;
	};

	var injectScript = function (obj) {
		var script = document.createElement('script');
		script.defer = true;
		// Have to use .text, since we support IE8,
		// which won't allow appending to a script
		script.text = obj.data;
		head.appendChild(script);
	};

	var handlers = {
		'default': injectScript
	};

	var execute = function (obj) {
		if (obj.type && handlers[obj.type]) {
			return handlers[obj.type](obj);
		}

		return handlers['default'](obj); // 'default' is a reserved word
	};

	var performActions = function (resources) {
		return resources.map(function (obj) {
			if (obj.execute) {
				execute(obj);
			}

			return obj;
		});
	};

	var fetch = function () {
		var i, l, promises = [];

		for (i = 0, l = arguments.length; i < l; i++) {
			promises.push(handleStackObject(arguments[i]));
		}

		return RSVP.all(promises);
	};

	var thenRequire = function () {
		var resources = fetch.apply(null, arguments);
		var promise = this.then(function () {
			return resources;
		}).then(performActions);
		promise.thenRequire = thenRequire;
		return promise;
	};

	window.loader = {
		require: function () {
			for (var a = 0, l = arguments.length; a < l; a++) {
				arguments[a].execute = arguments[a].execute !== false;

				if (arguments[a].once && inBasket.indexOf(arguments[a].url) >= 0) {
					arguments[a].execute = false;
				} else if (arguments[a].execute !== false && inBasket.indexOf(arguments[a].url) < 0) {
					inBasket.push(arguments[a].url);
				}
			}

			var promise = fetch.apply(null, arguments).then(performActions);

			promise.thenRequire = thenRequire;
			return promise;
		},

		remove: function (key) {
			localStorage.removeItem(storagePrefix + key);
			return this;
		},

		get: function (key) {
			var item = localStorage.getItem(storagePrefix + key);
			try {
				return JSON.parse(item || 'false');
			} catch (e) {
				return false;
			}
		},

		clear: function (expired) {
			var item, key;
			var now = +new Date();

			for (item in localStorage) {
				key = item.split(storagePrefix)[1];
				if (key && ( !expired || this.get(key).expire <= now )) {
					this.remove(key);
				}
			}

			return this;
		},

		isValidItem: null,

		timeout: 5000,

		addHandler: function (types, handler) {
			if (!Array.isArray(types)) {
				types = [types];
			}
			types.forEach(function (type) {
				handlers[type] = handler;
			});
		},

		removeHandler: function (types) {
			loader.addHandler(types, undefined);
		}
	};

	// delete expired keys
	loader.clear(true);

})(this, document);