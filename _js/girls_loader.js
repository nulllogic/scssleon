/**
 * @name 16Girls basic JS loader and configurator
 * @namespace 16Girls
 * @author Vladimir Lukyanov <vladimir@liikyanov.ru>
 * @website www.nulllogic.net
 * @version 0.0.1
 */


;(function(env) { 'use strict';

	env['config'] = function (config) {

		var body = document.body,
			timer;

		window.addEventListener('scroll', function() {
			clearTimeout(timer);
			if(!body.classList.contains('disable-hover')) {
				body.classList.add('disable-hover')
			}

			timer = setTimeout(function(){
				body.classList.remove('disable-hover')
			},500);
		}, false);

		/**
		 * Number of scripts loaded
		 *
		 * @private
		 * @property {Int} scriptsLoaded
		 */
		var scriptsLoaded = 0;

		/**
		 * Number of scripts to be loaded
		 *
		 * @private
		 * @property {Int} scriptsTotal
		 */
		var scriptsTotal = 0;

		/**
		 * Create an element and add it to the link.appendTo parameter
		 *
		 * @private
		 * @param {object} link element configuration
		 * @return {boolean}
		 */
		function createElement(link) {

			var el = document.createElement(link.element);
			for (var i in link) {
				if (i !== 'element' && i !== 'appendTo') {
					el[i] = link[i];
				}
			}
			var root = document.getElementsByTagName(link.appendTo)[0];
			return (typeof root.appendChild(el) == 'object');
		}


		/**
		 * Load CSS files
		 *
		 * @private
		 * @method create a <link> element and load
		 * @return {boolean}
		 */

		function loadCSS(url) {
			var el = createElement({
				element: 'link',
				rel: 'stylesheet',
				type: 'text/css',
				href: url,
				appendTo: 'head'
			});

			return (el);
		}

		/**
		 * Check for events readyState of browser
		 *
		 * @private
		 * @method check and process to callback function // Chrome,FF
		 * @return {boolean}
		 */

		function scriptReadyStateChanged() {

			scriptsLoaded += 1;
			return (scriptsLoaded === scriptsTotal );
		}

		/**
		 * Check for events readyState of browser
		 *
		 * @private
		 * @method check and process to callback function // IE
		 * @return {boolean}
		 */

		function scriptOnLoad(script) {
			if (document.readyState == 'loaded' || document.readyState == 'complete') {
				scriptReadyStateChanged();
				return true;
			} else {
				return false;
			}
		}

		/**
		 * Load JS files
		 *
		 * @private
		 * @method create a <script> element and load
		 * @return {boolean}
		 */

		function loadJS(url) {
			scriptsTotal += 1;

			var el = createElement({
				element: 'script',
				type: 'text/javascript',
				onload: scriptOnLoad(),
				onreadystatechange: scriptReadyStateChanged(),
				src: url,
				appendTo: 'head',
				async : true,
				defer : true
			});
			return (el);
		}

		/**
		 * Process array of element in config object
		 *
		 * @private
		 * @method switch option from params in config object
		 * @return {boolean}
		 */

		function processQuery(url, type) {
			switch (type) {
				case 'css' :
					loadCSS(url);
					break;
				case 'js' :
					loadJS(url);
					break;
				default:
					break;
			}
			return true;
		}

		if (config instanceof Object === true) {
			for(var prop in config) {
				if(config.hasOwnProperty(prop)) {
					for (var i in config[prop]) {
						processQuery(config[prop][i], prop);
					}
				}
			}
		}
	};


})(this);


