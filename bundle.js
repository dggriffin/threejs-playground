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
	    renderer = void 0;
	var geometry = void 0,
	    material = void 0,
	    mesh = void 0;
	
	init();
	animate();
	
	function init() {
	  scene = new THREE.Scene();
	  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
	  camera.position.z = 1000;
	  geometry = new THREE.BoxGeometry(200, 200, 200);
	  material = new THREE.MeshBasicMaterial({ color: 0xff00ff, wireframe: true });
	  mesh = new THREE.Mesh(geometry, material);
	  scene.add(mesh);
	  renderer = new THREE.WebGLRenderer();
	  renderer.setSize(window.innerWidth, window.innerHeight);
	  document.body.appendChild(renderer.domElement);
	}
	
	function animate() {
	  requestAnimationFrame(animate);
	  mesh.rotation.x += 0.01;
	  mesh.rotation.y += 0.02;
	  renderer.render(scene, camera);
	}

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