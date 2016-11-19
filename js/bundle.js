/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	(function initMap() {
	  var map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 5,
	    center: { lat: 24.886, lng: -70.268 },
	    mapTypeId: 'terrain'
	  });
	
	  // Define the LatLng coordinates for the polygon's path.
	  var triangleCoords = [{ lat: 25.774, lng: -80.190 }, { lat: 18.466, lng: -66.118 }, { lat: 32.321, lng: -64.757 }, { lat: 25.774, lng: -80.190 }];
	
	  // Construct the polygon.
	  var bermudaTriangle = new google.maps.Polygon({
	    paths: triangleCoords,
	    strokeColor: '#FF0000',
	    strokeOpacity: 0.8,
	    strokeWeight: 2,
	    fillColor: '#FF0000',
	    fillOpacity: 0.35
	  });
	  bermudaTriangle.setMap(map);
	})();

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map