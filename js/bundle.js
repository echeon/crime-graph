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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _precincts = __webpack_require__(26);
	
	var _precincts2 = _interopRequireDefault(_precincts);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function initMap() {
	  var map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 12,
	    center: { lat: 40.7831, lng: -73.9712 },
	    mapTypeId: 'roadmap'
	  });
	
	  _precincts2.default.forEach(function (precinct) {
	    drawPolygon(precinct, map);
	  });
	})();
	
	function drawPolygon(paths, map) {
	  var polygon = new google.maps.Polygon({
	    paths: paths,
	    strokeColor: '#FF0000',
	    strokeOpacity: 0.8,
	    strokeWeight: 2,
	    fillColor: '#FF0000',
	    fillOpacity: 0.35
	  });
	  polygon.setMap(map);
	  polygon.addListener('click', function () {
	    alert("hello");
	  });
	}

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _precinct_ = __webpack_require__(27);
	
	var _precinct_2 = _interopRequireDefault(_precinct_);
	
	var _precinct_3 = __webpack_require__(28);
	
	var _precinct_4 = _interopRequireDefault(_precinct_3);
	
	var _precinct_5 = __webpack_require__(29);
	
	var _precinct_6 = _interopRequireDefault(_precinct_5);
	
	var _precinct_7 = __webpack_require__(30);
	
	var _precinct_8 = _interopRequireDefault(_precinct_7);
	
	var _precinct_9 = __webpack_require__(31);
	
	var _precinct_10 = _interopRequireDefault(_precinct_9);
	
	var _precinct_11 = __webpack_require__(32);
	
	var _precinct_12 = _interopRequireDefault(_precinct_11);
	
	var _precinct_13 = __webpack_require__(33);
	
	var _precinct_14 = _interopRequireDefault(_precinct_13);
	
	var _precinct_15 = __webpack_require__(49);
	
	var _precinct_16 = _interopRequireDefault(_precinct_15);
	
	var _precinct_17 = __webpack_require__(36);
	
	var _precinct_18 = _interopRequireDefault(_precinct_17);
	
	var _precinct_19 = __webpack_require__(50);
	
	var _precinct_20 = _interopRequireDefault(_precinct_19);
	
	var _precinct_21 = __webpack_require__(37);
	
	var _precinct_22 = _interopRequireDefault(_precinct_21);
	
	var _precinct_23 = __webpack_require__(38);
	
	var _precinct_24 = _interopRequireDefault(_precinct_23);
	
	var _precinct_25 = __webpack_require__(51);
	
	var _precinct_26 = _interopRequireDefault(_precinct_25);
	
	var _precinct_27 = __webpack_require__(40);
	
	var _precinct_28 = _interopRequireDefault(_precinct_27);
	
	var _precinct_29 = __webpack_require__(41);
	
	var _precinct_30 = _interopRequireDefault(_precinct_29);
	
	var _precinct_31 = __webpack_require__(42);
	
	var _precinct_32 = _interopRequireDefault(_precinct_31);
	
	var _precinct_33 = __webpack_require__(43);
	
	var _precinct_34 = _interopRequireDefault(_precinct_33);
	
	var _precinct_35 = __webpack_require__(44);
	
	var _precinct_36 = _interopRequireDefault(_precinct_35);
	
	var _precinct_37 = __webpack_require__(45);
	
	var _precinct_38 = _interopRequireDefault(_precinct_37);
	
	var _precinct_39 = __webpack_require__(46);
	
	var _precinct_40 = _interopRequireDefault(_precinct_39);
	
	var _precinct_41 = __webpack_require__(47);
	
	var _precinct_42 = _interopRequireDefault(_precinct_41);
	
	var _precinct_43 = __webpack_require__(48);
	
	var _precinct_44 = _interopRequireDefault(_precinct_43);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var precincts = [_precinct_2.default, _precinct_4.default, _precinct_6.default, _precinct_8.default, _precinct_10.default, _precinct_12.default, _precinct_14.default, _precinct_16.default, _precinct_18.default, _precinct_20.default, _precinct_22.default, _precinct_24.default, _precinct_26.default, _precinct_28.default, _precinct_30.default, _precinct_32.default, _precinct_34.default, _precinct_36.default, _precinct_38.default, _precinct_40.default, _precinct_42.default, _precinct_44.default];
	
	exports.default = precincts;

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var precinct1 = [{ lat: 40.725437, lng: -73.996739 }, { lat: 40.728365, lng: -74.002919 }, { lat: 40.729438, lng: -74.014421 }, { lat: 40.728495, lng: -74.01485 }, { lat: 40.728169, lng: -74.011459 }, { lat: 40.726446, lng: -74.011631 }, { lat: 40.726836, lng: -74.015236 }, { lat: 40.726316, lng: -74.015279 }, { lat: 40.72586, lng: -74.01176 }, { lat: 40.721404, lng: -74.012618 }, { lat: 40.721795, lng: -74.016266 }, { lat: 40.720201, lng: -74.016438 }, { lat: 40.719746, lng: -74.013004 }, { lat: 40.718347, lng: -74.013348 }, { lat: 40.718607, lng: -74.016781 }, { lat: 40.708035, lng: -74.018884 }, { lat: 40.699349, lng: -74.037724 }, { lat: 40.701073, lng: -74.040084 }, { lat: 40.69834, lng: -74.043903 }, { lat: 40.696453, lng: -74.041843 }, { lat: 40.69154, lng: -74.045062 }, { lat: 40.691507, lng: -74.047594 }, { lat: 40.689392, lng: -74.048281 }, { lat: 40.687667, lng: -74.044762 }, { lat: 40.688904, lng: -74.042315 }, { lat: 40.690075, lng: -74.042273 }, { lat: 40.690921, lng: -74.043775 }, { lat: 40.697299, lng: -74.03944 }, { lat: 40.707059, lng: -74.019098 }, { lat: 40.706051, lng: -74.019399 }, { lat: 40.704522, lng: -74.018927 }, { lat: 40.703286, lng: -74.017725 }, { lat: 40.702082, lng: -74.016566 }, { lat: 40.693948, lng: -74.02133 }, { lat: 40.691898, lng: -74.022617 }, { lat: 40.68604, lng: -74.028625 }, { lat: 40.683339, lng: -74.02751 }, { lat: 40.682884, lng: -74.022574 }, { lat: 40.685878, lng: -74.016094 }, { lat: 40.688188, lng: -74.011331 }, { lat: 40.691572, lng: -74.010172 }, { lat: 40.693752, lng: -74.011803 }, { lat: 40.694533, lng: -74.014935 }, { lat: 40.694598, lng: -74.01897 }, { lat: 40.699674, lng: -74.01309 }, { lat: 40.700065, lng: -74.010773 }, { lat: 40.701431, lng: -74.011202 }, { lat: 40.701724, lng: -74.009657 }, { lat: 40.706734, lng: -74.001546 }, { lat: 40.70784, lng: -73.999443 }, { lat: 40.712134, lng: -74.005537 }, { lat: 40.712557, lng: -74.00455 }, { lat: 40.713175, lng: -74.004035 }, { lat: 40.714151, lng: -74.006267 }];
	
	exports.default = precinct1;

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var precinct5 = [{ lat: 40.725405, lng: -73.996782 }, { lat: 40.714184, lng: -74.006267 }, { lat: 40.713175, lng: -74.004121 }, { lat: 40.712525, lng: -74.00455 }, { lat: 40.712134, lng: -74.005494 }, { lat: 40.707873, lng: -73.999529 }, { lat: 40.708458, lng: -73.99807 }, { lat: 40.709499, lng: -73.99189 }, { lat: 40.714509, lng: -73.992791 }, { lat: 40.721567, lng: -73.989229 }, { lat: 40.722933, lng: -73.988628 }, { lat: 40.72508, lng: -73.99528 }];
	
	exports.default = precinct5;

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var precinct6 = [{ lat: 40.734804, lng: -73.990817 }, { lat: 40.742347, lng: -74.008584 }, { lat: 40.74238, lng: -74.009314 }, { lat: 40.741535, lng: -74.009528 }, { lat: 40.74173, lng: -74.012275 }, { lat: 40.741502, lng: -74.012275 }, { lat: 40.741079, lng: -74.009528 }, { lat: 40.740657, lng: -74.0097 }, { lat: 40.740754, lng: -74.012876 }, { lat: 40.739193, lng: -74.012146 }, { lat: 40.739161, lng: -74.010429 }, { lat: 40.730446, lng: -74.011331 }, { lat: 40.730706, lng: -74.014163 }, { lat: 40.729438, lng: -74.014335 }, { lat: 40.728397, lng: -74.002876 }, { lat: 40.725437, lng: -73.996696 }, { lat: 40.731682, lng: -73.991461 }];
	
	exports.default = precinct6;

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var precinct7 = [{ lat: 40.722966, lng: -73.988628 }, { lat: 40.7216, lng: -73.989186 }, { lat: 40.714476, lng: -73.992834 }, { lat: 40.709499, lng: -73.991804 }, { lat: 40.709922, lng: -73.988714 }, { lat: 40.709011, lng: -73.988457 }, { lat: 40.709792, lng: -73.981118 }, { lat: 40.71054, lng: -73.977814 }, { lat: 40.711451, lng: -73.976698 }, { lat: 40.715777, lng: -73.974552 }, { lat: 40.718998, lng: -73.973393 }, { lat: 40.718867, lng: -73.975024 }, { lat: 40.71929, lng: -73.977299 }, { lat: 40.719908, lng: -73.978844 }];
	
	exports.default = precinct7;

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var precinct9 = [{ lat: 40.734804, lng: -73.990774 }, { lat: 40.731747, lng: -73.991461 }, { lat: 40.725405, lng: -73.996739 }, { lat: 40.725145, lng: -73.995323 }, { lat: 40.722933, lng: -73.988585 }, { lat: 40.719843, lng: -73.978715 }, { lat: 40.719258, lng: -73.977127 }, { lat: 40.718835, lng: -73.974981 }, { lat: 40.718998, lng: -73.973436 }, { lat: 40.726706, lng: -73.971548 }];
	
	exports.default = precinct9;

/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var precinct10 = [{ lat: 40.742315, lng: -74.009271 }, { lat: 40.74238, lng: -74.008584 }, { lat: 40.738576, lng: -73.999658 }, { lat: 40.747842, lng: -73.99292 }, { lat: 40.750248, lng: -73.998671 }, { lat: 40.759123, lng: -73.992147 }, { lat: 40.763024, lng: -74.001331 }, { lat: 40.763836, lng: -74.003649 }, { lat: 40.763576, lng: -74.003863 }, { lat: 40.762634, lng: -74.001675 }, { lat: 40.761723, lng: -74.002275 }, { lat: 40.762731, lng: -74.004464 }, { lat: 40.762504, lng: -74.004722 }, { lat: 40.761593, lng: -74.00249 }, { lat: 40.761073, lng: -74.00279 }, { lat: 40.761138, lng: -74.003177 }, { lat: 40.759253, lng: -74.004507 }, { lat: 40.759968, lng: -74.006567 }, { lat: 40.759188, lng: -74.007039 }, { lat: 40.75831, lng: -74.005108 }, { lat: 40.755905, lng: -74.006567 }, { lat: 40.754442, lng: -74.007683 }, { lat: 40.752394, lng: -74.008412 }, { lat: 40.753011, lng: -74.01 }, { lat: 40.752556, lng: -74.010129 }, { lat: 40.751809, lng: -74.008627 }, { lat: 40.750606, lng: -74.009056 }, { lat: 40.751288, lng: -74.010558 }, { lat: 40.750996, lng: -74.01073 }, { lat: 40.750346, lng: -74.009228 }, { lat: 40.749078, lng: -74.009957 }, { lat: 40.749045, lng: -74.011331 }, { lat: 40.748427, lng: -74.011331 }, { lat: 40.748395, lng: -74.009142 }, { lat: 40.74781, lng: -74.009142 }, { lat: 40.74807, lng: -74.011374 }, { lat: 40.747615, lng: -74.011459 }, { lat: 40.747322, lng: -74.009228 }, { lat: 40.746834, lng: -74.009314 }, { lat: 40.747029, lng: -74.011545 }, { lat: 40.746574, lng: -74.011674 }, { lat: 40.746282, lng: -74.009442 }, { lat: 40.745761, lng: -74.009528 }, { lat: 40.745956, lng: -74.011846 }, { lat: 40.745306, lng: -74.011974 }, { lat: 40.744884, lng: -74.008884 }, { lat: 40.743876, lng: -74.009056 }, { lat: 40.744071, lng: -74.012103 }, { lat: 40.743485, lng: -74.012232 }, { lat: 40.743063, lng: -74.009228 }];
	
	exports.default = precinct10;

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var precinct13 = [{ lat: 40.738608, lng: -73.999658 }, { lat: 40.747842, lng: -73.99292 }, { lat: 40.743258, lng: -73.982019 }, { lat: 40.743908, lng: -73.98159 }, { lat: 40.740071, lng: -73.972492 }, { lat: 40.739421, lng: -73.972664 }, { lat: 40.735714, lng: -73.972449 }, { lat: 40.735747, lng: -73.97275 }, { lat: 40.736332, lng: -73.974338 }, { lat: 40.735584, lng: -73.974466 }, { lat: 40.735161, lng: -73.973179 }, { lat: 40.734869, lng: -73.973351 }, { lat: 40.735226, lng: -73.97438 }, { lat: 40.731389, lng: -73.973393 }, { lat: 40.7296, lng: -73.971548 }, { lat: 40.728625, lng: -73.971334 }, { lat: 40.726706, lng: -73.971548 }];
	
	exports.default = precinct13;

/***/ },
/* 34 */,
/* 35 */,
/* 36 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var precinct17 = [{ lat: 40.762211, lng: -73.968244 }, { lat: 40.758278, lng: -73.958759 }, { lat: 40.75571, lng: -73.960648 }, { lat: 40.755092, lng: -73.961678 }, { lat: 40.745501, lng: -73.96996 }, { lat: 40.744233, lng: -73.971076 }, { lat: 40.742315, lng: -73.971891 }, { lat: 40.740071, lng: -73.972406 }, { lat: 40.743876, lng: -73.981547 }, { lat: 40.746444, lng: -73.979788 }, { lat: 40.747777, lng: -73.982921 }, { lat: 40.751451, lng: -73.980217 }, { lat: 40.750151, lng: -73.976955 }];
	
	exports.default = precinct17;

/***/ },
/* 37 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var precinct19 = [{ lat: 40.78795, lng: -73.955841 }, { lat: 40.782784, lng: -73.94361 }, { lat: 40.781516, lng: -73.943868 }, { lat: 40.779274, lng: -73.943224 }, { lat: 40.779632, lng: -73.943052 }, { lat: 40.779437, lng: -73.942666 }, { lat: 40.780736, lng: -73.939061 }, { lat: 40.781581, lng: -73.938503 }, { lat: 40.781484, lng: -73.937688 }, { lat: 40.780769, lng: -73.93713 }, { lat: 40.780151, lng: -73.937645 }, { lat: 40.780151, lng: -73.938589 }, { lat: 40.779307, lng: -73.939533 }, { lat: 40.779047, lng: -73.942494 }, { lat: 40.778624, lng: -73.942881 }, { lat: 40.777324, lng: -73.942323 }, { lat: 40.776999, lng: -73.942065 }, { lat: 40.776057, lng: -73.941936 }, { lat: 40.775569, lng: -73.942409 }, { lat: 40.775114, lng: -73.942537 }, { lat: 40.772579, lng: -73.94464 }, { lat: 40.771084, lng: -73.946528 }, { lat: 40.767152, lng: -73.949876 }, { lat: 40.762829, lng: -73.953824 }, { lat: 40.761691, lng: -73.95494 }, { lat: 40.758245, lng: -73.958716 }, { lat: 40.764259, lng: -73.973093 }];
	
	exports.default = precinct19;

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var precinct20 = [{ lat: 40.773294, lng: -73.994036 }, { lat: 40.772709, lng: -73.993177 }, { lat: 40.769199, lng: -73.984852 }, { lat: 40.769817, lng: -73.984337 }, { lat: 40.768647, lng: -73.981504 }, { lat: 40.785253, lng: -73.969359 }, { lat: 40.790614, lng: -73.981977 }, { lat: 40.78665, lng: -73.98468 }, { lat: 40.786715, lng: -73.985839 }, { lat: 40.785091, lng: -73.987298 }, { lat: 40.784636, lng: -73.986139 }, { lat: 40.779956, lng: -73.9891 }, { lat: 40.779762, lng: -73.991632 }, { lat: 40.779534, lng: -73.991632 }, { lat: 40.779697, lng: -73.989058 }, { lat: 40.777649, lng: -73.990517 }, { lat: 40.777584, lng: -73.990989 }, { lat: 40.775342, lng: -73.992577 }, { lat: 40.774919, lng: -73.992748 }];
	
	exports.default = precinct20;

/***/ },
/* 39 */,
/* 40 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var precinct23 = [{ lat: 40.787918, lng: -73.955755 }, { lat: 40.800004, lng: -73.947001 }, { lat: 40.794383, lng: -73.933611 }, { lat: 40.793701, lng: -73.934083 }, { lat: 40.793344, lng: -73.933139 }, { lat: 40.793116, lng: -73.93301 }, { lat: 40.791427, lng: -73.93537 }, { lat: 40.790679, lng: -73.936143 }, { lat: 40.789315, lng: -73.936958 }, { lat: 40.788925, lng: -73.936057 }, { lat: 40.788697, lng: -73.936272 }, { lat: 40.78912, lng: -73.93713 }, { lat: 40.787495, lng: -73.937817 }, { lat: 40.786975, lng: -73.938246 }, { lat: 40.785188, lng: -73.939877 }, { lat: 40.784571, lng: -73.941121 }, { lat: 40.783661, lng: -73.942752 }, { lat: 40.782751, lng: -73.94361 }];
	
	exports.default = precinct23;

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var precinct24 = [{ lat: 40.806014, lng: -73.971033 }, { lat: 40.800556, lng: -73.958287 }, { lat: 40.785286, lng: -73.969402 }, { lat: 40.790582, lng: -73.981977 }];
	
	exports.default = precinct24;

/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var precinct25 = [{ lat: 40.799971, lng: -73.947001 }, { lat: 40.803187, lng: -73.944683 }, { lat: 40.80387, lng: -73.946228 }, { lat: 40.806436, lng: -73.944383 }, { lat: 40.805721, lng: -73.942838 }, { lat: 40.817902, lng: -73.933868 }, { lat: 40.815531, lng: -73.933783 }, { lat: 40.813679, lng: -73.933911 }, { lat: 40.810529, lng: -73.934255 }, { lat: 40.809457, lng: -73.934255 }, { lat: 40.80845, lng: -73.933997 }, { lat: 40.807118, lng: -73.933139 }, { lat: 40.805137, lng: -73.931293 }, { lat: 40.802928, lng: -73.929749 }, { lat: 40.801173, lng: -73.929105 }, { lat: 40.799939, lng: -73.928933 }, { lat: 40.798542, lng: -73.928847 }, { lat: 40.800101, lng: -73.926744 }, { lat: 40.801985, lng: -73.925543 }, { lat: 40.801856, lng: -73.922324 }, { lat: 40.801466, lng: -73.921638 }, { lat: 40.800231, lng: -73.920951 }, { lat: 40.799387, lng: -73.920264 }, { lat: 40.797665, lng: -73.91623 }, { lat: 40.796853, lng: -73.915114 }, { lat: 40.794318, lng: -73.913527 }, { lat: 40.792889, lng: -73.914127 }, { lat: 40.791232, lng: -73.915844 }, { lat: 40.79029, lng: -73.916702 }, { lat: 40.790452, lng: -73.917131 }, { lat: 40.79003, lng: -73.918118 }, { lat: 40.789477, lng: -73.918462 }, { lat: 40.785546, lng: -73.921852 }, { lat: 40.785221, lng: -73.922195 }, { lat: 40.783499, lng: -73.922753 }, { lat: 40.782231, lng: -73.924513 }, { lat: 40.782199, lng: -73.925543 }, { lat: 40.780931, lng: -73.927388 }, { lat: 40.780834, lng: -73.92786 }, { lat: 40.780996, lng: -73.928676 }, { lat: 40.782231, lng: -73.930564 }, { lat: 40.782849, lng: -73.934941 }, { lat: 40.783921, lng: -73.935971 }, { lat: 40.784408, lng: -73.936143 }, { lat: 40.785578, lng: -73.935757 }, { lat: 40.78977, lng: -73.932409 }, { lat: 40.791102, lng: -73.930821 }, { lat: 40.791394, lng: -73.929577 }, { lat: 40.790907, lng: -73.928161 }, { lat: 40.791849, lng: -73.927388 }, { lat: 40.792272, lng: -73.928332 }, { lat: 40.793019, lng: -73.928375 }, { lat: 40.794513, lng: -73.927345 }, { lat: 40.795326, lng: -73.926916 }, { lat: 40.796398, lng: -73.926916 }, { lat: 40.797372, lng: -73.927217 }, { lat: 40.79708, lng: -73.929019 }, { lat: 40.795715, lng: -73.929319 }, { lat: 40.795001, lng: -73.92992 }, { lat: 40.794481, lng: -73.930135 }, { lat: 40.793019, lng: -73.933139 }, { lat: 40.793376, lng: -73.933182 }, { lat: 40.793734, lng: -73.934126 }, { lat: 40.794351, lng: -73.933654 }];
	
	exports.default = precinct25;

/***/ },
/* 43 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var precinct26 = [{ lat: 40.805997, lng: -73.971012 }, { lat: 40.809067, lng: -73.968759 }, { lat: 40.816148, lng: -73.963909 }, { lat: 40.820435, lng: -73.96009 }, { lat: 40.817577, lng: -73.95318 }, { lat: 40.822676, lng: -73.949447 }, { lat: 40.821247, lng: -73.946056 }, { lat: 40.817122, lng: -73.94803 }, { lat: 40.814914, lng: -73.949018 }, { lat: 40.81316, lng: -73.950305 }, { lat: 40.811406, lng: -73.952107 }, { lat: 40.809457, lng: -73.953609 }, { lat: 40.810009, lng: -73.954983 }, { lat: 40.805624, lng: -73.958244 }, { lat: 40.803155, lng: -73.958244 }, { lat: 40.801141, lng: -73.959703 }];
	
	exports.default = precinct26;

/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var precinct28 = [{ lat: 40.801141, lng: -73.959661 }, { lat: 40.796885, lng: -73.949318 }, { lat: 40.803187, lng: -73.944683 }, { lat: 40.803837, lng: -73.946228 }, { lat: 40.806436, lng: -73.94434 }, { lat: 40.805754, lng: -73.942838 }, { lat: 40.807735, lng: -73.941336 }, { lat: 40.81199, lng: -73.95155 }, { lat: 40.811471, lng: -73.952065 }, { lat: 40.809457, lng: -73.953609 }, { lat: 40.810009, lng: -73.955026 }, { lat: 40.805656, lng: -73.958244 }, { lat: 40.803155, lng: -73.958201 }];
	
	exports.default = precinct28;

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var precinct30 = [{ lat: 40.820402, lng: -73.960004 }, { lat: 40.821117, lng: -73.959274 }, { lat: 40.821539, lng: -73.958888 }, { lat: 40.822578, lng: -73.959918 }, { lat: 40.823065, lng: -73.959661 }, { lat: 40.822773, lng: -73.958931 }, { lat: 40.821994, lng: -73.958588 }, { lat: 40.822741, lng: -73.957987 }, { lat: 40.823585, lng: -73.959661 }, { lat: 40.827157, lng: -73.9573 }, { lat: 40.827027, lng: -73.956957 }, { lat: 40.827937, lng: -73.956313 }, { lat: 40.827417, lng: -73.955112 }, { lat: 40.828066, lng: -73.954682 }, { lat: 40.828586, lng: -73.954039 }, { lat: 40.832807, lng: -73.95112 }, { lat: 40.833262, lng: -73.951077 }, { lat: 40.834593, lng: -73.950047 }, { lat: 40.829722, lng: -73.938632 }, { lat: 40.828326, lng: -73.939276 }, { lat: 40.82326, lng: -73.942881 }, { lat: 40.820857, lng: -73.945155 }, { lat: 40.822643, lng: -73.94949 }, { lat: 40.817609, lng: -73.953223 }];
	
	exports.default = precinct30;

/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var precinct32 = [{ lat: 40.812023, lng: -73.95155 }, { lat: 40.813192, lng: -73.950305 }, { lat: 40.815076, lng: -73.948889 }, { lat: 40.821247, lng: -73.946099 }, { lat: 40.820922, lng: -73.945198 }, { lat: 40.823228, lng: -73.942924 }, { lat: 40.828326, lng: -73.939276 }, { lat: 40.829787, lng: -73.938675 }, { lat: 40.830404, lng: -73.94022 }, { lat: 40.831671, lng: -73.939276 }, { lat: 40.832548, lng: -73.938847 }, { lat: 40.834074, lng: -73.93713 }, { lat: 40.83495, lng: -73.936057 }, { lat: 40.83547, lng: -73.935328 }, { lat: 40.835502, lng: -73.93477 }, { lat: 40.834236, lng: -73.935113 }, { lat: 40.828651, lng: -73.934598 }, { lat: 40.824657, lng: -73.934298 }, { lat: 40.819883, lng: -73.933868 }, { lat: 40.817902, lng: -73.933868 }, { lat: 40.807735, lng: -73.941336 }];
	
	exports.default = precinct32;

/***/ },
/* 47 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var precinct33 = [{ lat: 40.834626, lng: -73.950133 }, { lat: 40.840145, lng: -73.948374 }, { lat: 40.843846, lng: -73.946099 }, { lat: 40.844626, lng: -73.946099 }, { lat: 40.846931, lng: -73.946829 }, { lat: 40.848424, lng: -73.946657 }, { lat: 40.850274, lng: -73.947129 }, { lat: 40.850956, lng: -73.947001 }, { lat: 40.851216, lng: -73.945799 }, { lat: 40.850664, lng: -73.942065 }, { lat: 40.850858, lng: -73.94155 }, { lat: 40.850566, lng: -73.940821 }, { lat: 40.849755, lng: -73.940735 }, { lat: 40.848943, lng: -73.937044 }, { lat: 40.846801, lng: -73.931766 }, { lat: 40.846281, lng: -73.930607 }, { lat: 40.845892, lng: -73.929191 }, { lat: 40.844658, lng: -73.929877 }, { lat: 40.842028, lng: -73.930993 }, { lat: 40.838165, lng: -73.933182 }, { lat: 40.835437, lng: -73.934727 }, { lat: 40.83547, lng: -73.935328 }, { lat: 40.834918, lng: -73.936057 }, { lat: 40.833359, lng: -73.937988 }, { lat: 40.83245, lng: -73.938932 }, { lat: 40.831768, lng: -73.939319 }, { lat: 40.831021, lng: -73.939834 }, { lat: 40.830404, lng: -73.940263 }];
	
	exports.default = precinct33;

/***/ },
/* 48 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var precinct34 = [{ lat: 40.851118, lng: -73.945584 }, { lat: 40.850631, lng: -73.942065 }, { lat: 40.850858, lng: -73.94155 }, { lat: 40.850566, lng: -73.940864 }, { lat: 40.849787, lng: -73.940735 }, { lat: 40.848911, lng: -73.937044 }, { lat: 40.846801, lng: -73.931808 }, { lat: 40.846281, lng: -73.930693 }, { lat: 40.845892, lng: -73.929191 }, { lat: 40.849852, lng: -73.92653 }, { lat: 40.855046, lng: -73.922839 }, { lat: 40.856604, lng: -73.921552 }, { lat: 40.858032, lng: -73.920608 }, { lat: 40.858779, lng: -73.921208 }, { lat: 40.859266, lng: -73.921938 }, { lat: 40.860272, lng: -73.92138 }, { lat: 40.859136, lng: -73.920522 }, { lat: 40.858844, lng: -73.919621 }, { lat: 40.85998, lng: -73.918333 }, { lat: 40.860337, lng: -73.91829 }, { lat: 40.860759, lng: -73.917861 }, { lat: 40.861018, lng: -73.917861 }, { lat: 40.861732, lng: -73.917131 }, { lat: 40.862089, lng: -73.916531 }, { lat: 40.863063, lng: -73.915286 }, { lat: 40.863323, lng: -73.915372 }, { lat: 40.863777, lng: -73.915029 }, { lat: 40.864329, lng: -73.915844 }, { lat: 40.864718, lng: -73.913956 }, { lat: 40.866406, lng: -73.912497 }, { lat: 40.869067, lng: -73.911037 }, { lat: 40.870949, lng: -73.910565 }, { lat: 40.871825, lng: -73.910351 }, { lat: 40.872377, lng: -73.910651 }, { lat: 40.873156, lng: -73.911252 }, { lat: 40.873643, lng: -73.912024 }, { lat: 40.874292, lng: -73.914342 }, { lat: 40.874681, lng: -73.916016 }, { lat: 40.874, lng: -73.918033 }, { lat: 40.873481, lng: -73.918676 }, { lat: 40.873935, lng: -73.919234 }, { lat: 40.874779, lng: -73.918848 }, { lat: 40.875492, lng: -73.920736 }, { lat: 40.87533, lng: -73.921123 }, { lat: 40.874259, lng: -73.920736 }, { lat: 40.873805, lng: -73.920007 }, { lat: 40.873124, lng: -73.920565 }, { lat: 40.873643, lng: -73.921938 }, { lat: 40.874454, lng: -73.922582 }, { lat: 40.875103, lng: -73.92271 }, { lat: 40.875752, lng: -73.92241 }, { lat: 40.876758, lng: -73.922281 }, { lat: 40.87718, lng: -73.922882 }, { lat: 40.877439, lng: -73.924127 }, { lat: 40.877374, lng: -73.925457 }, { lat: 40.877277, lng: -73.926358 }, { lat: 40.877602, lng: -73.92653 }, { lat: 40.876823, lng: -73.927345 }, { lat: 40.876628, lng: -73.928118 }, { lat: 40.87559, lng: -73.929276 }, { lat: 40.870819, lng: -73.932195 }, { lat: 40.869878, lng: -73.932281 }, { lat: 40.869197, lng: -73.932538 }, { lat: 40.868386, lng: -73.932323 }, { lat: 40.867347, lng: -73.932581 }, { lat: 40.857448, lng: -73.939662 }, { lat: 40.856896, lng: -73.940306 }, { lat: 40.855987, lng: -73.940692 }, { lat: 40.854819, lng: -73.941464 }, { lat: 40.853261, lng: -73.942409 }, { lat: 40.852287, lng: -73.943567 }, { lat: 40.851865, lng: -73.944769 }, { lat: 40.851345, lng: -73.945799 }];
	
	exports.default = precinct34;

/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var precinct14 = [{ lat: 40.750281, lng: -73.998628 }, { lat: 40.760358, lng: -73.991246 }, { lat: 40.753369, lng: -73.974724 }, { lat: 40.750118, lng: -73.976998 }, { lat: 40.751516, lng: -73.98026 }, { lat: 40.747745, lng: -73.982921 }, { lat: 40.746379, lng: -73.979702 }, { lat: 40.743258, lng: -73.982019 }];
	
	exports.default = precinct14;

/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var precinct18 = [{ lat: 40.759123, lng: -73.992147 }, { lat: 40.763024, lng: -74.001331 }, { lat: 40.763349, lng: -74.001074 }, { lat: 40.764389, lng: -74.003263 }, { lat: 40.764746, lng: -74.003091 }, { lat: 40.763446, lng: -74.000044 }, { lat: 40.764031, lng: -73.9994 }, { lat: 40.765169, lng: -74.002404 }, { lat: 40.765982, lng: -74.002233 }, { lat: 40.764649, lng: -73.998971 }, { lat: 40.765364, lng: -73.998413 }, { lat: 40.766892, lng: -74.00176 }, { lat: 40.767314, lng: -74.001417 }, { lat: 40.766047, lng: -73.997984 }, { lat: 40.766827, lng: -73.997426 }, { lat: 40.768224, lng: -74.000731 }, { lat: 40.768549, lng: -74.000473 }, { lat: 40.767152, lng: -73.997126 }, { lat: 40.768029, lng: -73.996525 }, { lat: 40.769427, lng: -73.999701 }, { lat: 40.769719, lng: -73.999572 }, { lat: 40.768712, lng: -73.99704 }, { lat: 40.769459, lng: -73.996696 }, { lat: 40.770369, lng: -73.9991 }, { lat: 40.770857, lng: -73.998756 }, { lat: 40.769849, lng: -73.996439 }, { lat: 40.771604, lng: -73.995066 }, { lat: 40.772514, lng: -73.99704 }, { lat: 40.772839, lng: -73.996825 }, { lat: 40.772027, lng: -73.994808 }, { lat: 40.772352, lng: -73.994594 }, { lat: 40.773067, lng: -73.996224 }, { lat: 40.773294, lng: -73.99601 }, { lat: 40.772547, lng: -73.99425 }, { lat: 40.772807, lng: -73.993993 }, { lat: 40.773782, lng: -73.996267 }, { lat: 40.774107, lng: -73.996096 }, { lat: 40.773197, lng: -73.993907 }, { lat: 40.772742, lng: -73.99322 }, { lat: 40.769199, lng: -73.984809 }, { lat: 40.769817, lng: -73.984294 }, { lat: 40.768907, lng: -73.982105 }, { lat: 40.768712, lng: -73.98159 }, { lat: 40.768387, lng: -73.981333 }, { lat: 40.768029, lng: -73.98129 }, { lat: 40.767769, lng: -73.981204 }, { lat: 40.762211, lng: -73.968201 }, { lat: 40.753402, lng: -73.974724 }, { lat: 40.760358, lng: -73.991289 }];
	
	exports.default = precinct18;

/***/ },
/* 51 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var precinct22 = [{ lat: 40.768679, lng: -73.981504 }, { lat: 40.768354, lng: -73.981247 }, { lat: 40.768029, lng: -73.981204 }, { lat: 40.767802, lng: -73.981118 }, { lat: 40.765982, lng: -73.977084 }, { lat: 40.764291, lng: -73.972964 }, { lat: 40.796853, lng: -73.949275 }, { lat: 40.800621, lng: -73.958201 }];
	
	exports.default = precinct22;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map