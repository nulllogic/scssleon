/**
 * @name 16Girls basic JS loader and configurator
 * @namespace 16Girls
 * @author Vladimir Lukyanov <vladimir@liikyanov.ru>
 * @website www.nulllogic.net
 * @version 0.1.0
 */


;
(function () {
	'use strict';

	if (typeof toLoad === 'undefined') {
		throw new Error('toLoad variable is not defined. See documentation at https://github.com/nulllogic/16Girls');
	}


	var _scriptsLoaded = 0;
	var _scriptsTotal = 0;
	var doc = document;

	// a simple event handler wrapper
	function on(el, ev, callback) {
		if (el.addEventListener) {
			el.addEventListener(ev, callback, false);
		} else if (el.attachEvent) {
			el.attachEvent("on" + ev, callback);
		}
	}

	for (var k in toLoad) {

		if (toLoad.hasOwnProperty(k)) {
			switch (k) {
				case 'js' :

					for (var js in toLoad[k]) {
						if (toLoad[k].hasOwnProperty(js)) {

							injectScript(toLoad[k][js])

						}
					}

					break;
				case 'css' :

					for (var css in toLoad[k]) {
						if (toLoad[k].hasOwnProperty(css)) {
							on(window, "load", injectStyleSheet(toLoad[k][css]));
						}
					}
					break;

				case 'callback' :
					break;

				default :
					throw new Error('You are declaring variable out of the scope of possible variations. See documentation at https://github.com/nulllogic/16Girls');
					break;
			}
		}

	}

	function injectStyleSheet(cssObj) {

		var stylesheet = doc.createElement('link');
		stylesheet.href = cssObj[0];
		stylesheet.rel = 'stylesheet';
		stylesheet.type = 'text/css';

		doc.getElementsByTagName('head')[0].appendChild(stylesheet);

	}


	function injectScript(jsObj) {

		var callback;

		var script = document.createElement("script");
		script.type = "text/javascript";

		console.log(typeof jsObj[1] !== 'undefined' && typeof jsObj[1] === "function" || typeof jsObj[1] === "object");
		if(typeof jsObj[1] !== 'undefined' && typeof jsObj[1] === "function" || typeof jsObj[1] === "object") {
			callback = jsObj[1];
		} else {
			callback = function() {};
		}

		if (typeof jsObj[2] !== 'undefined' && jsObj[2] !== 'cache') {

			if (script.readyState) {  //IE
				script.onreadystatechange = function () {
					if (script.readyState == "loaded" ||
						script.readyState == "complete") {
						script.onreadystatechange = null;
						callback.call();
					}
				};
			} else {  //Others
				console.log(jsObj[0]);
				script.onload = function () {
					callback.call();
				};
			}

		} else {
			console.log('good');

			script.onload = function () {
				callback.call();
			};

		}
		script.src = jsObj[0];
		document.getElementsByTagName("head")[0].appendChild(script);

	}

})();

