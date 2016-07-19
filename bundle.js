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
	
	__webpack_require__(1);
	
	var scene = void 0,
	    camera = void 0,
	    renderer = void 0,
	    cube = void 0;
	
	init();
	//animate();
	
	function init() {}
	// scene = new THREE.Scene();
	// camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
	//
	// renderer = new THREE.WebGLRenderer();
	// renderer.setSize( window.innerWidth, window.innerHeight );
	//
	// document.body.appendChild( renderer.domElement );
	//
	// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
	// var material = new THREE.MeshNormalMaterial();
	// cube = new THREE.Mesh( geometry, material );
	// scene.add( cube );
	//
	// camera.position.z = 5;
	//
	// renderer.render(scene, camera);
	
	
	// function animate() {
	//   requestAnimationFrame( animate );
	//
	//   cube.rotation.x += 0.1;
	//   cube.rotation.y += 0.1;
	//
	//   renderer.render(scene, camera);
	// };

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	//Paul Irish Style -- https://gist.github.com/838785
	if (!window.requestAnimationFrame) {
	  window.requestAnimationFrame = function () {
	    return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback, element) {
	      window.setTimeout(callback, 1000 / 60);
	    };
	  }();
	}

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map