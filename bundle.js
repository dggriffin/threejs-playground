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
	    mesh = void 0,
	    torusKnot = void 0;
	
	init();
	animate();
	
	function init() {
	  // create a WebGL renderer, camera
	  // and a scene
	  renderer = new THREE.WebGLRenderer();
	  camera = getCamera();
	  scene = new THREE.Scene();
	
	  // add the camera to the scene
	  scene.add(camera);
	
	  // create our torusKnot object
	  torusKnot = getTorusKnot();
	
	  // add the torusKnot to the scene
	  scene.add(torusKnot);
	
	  // create a point light
	  var pointLight = createPointLight();
	
	  // add to the scene
	  scene.add(pointLight);
	
	  // start the renderer
	  renderer.setSize(window.innerWidth, window.innerHeight);
	
	  // attach the render-supplied DOM element
	  document.body.appendChild(renderer.domElement);
	}
	
	function getCamera() {
	  // set the scene size
	  var WIDTH = 400,
	      HEIGHT = 300;
	
	  // set some camera attributes
	  var VIEW_ANGLE = 45,
	      ASPECT = WIDTH / HEIGHT,
	      NEAR = 0.1,
	      FAR = 10000;
	
	  var camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
	
	  // the camera starts at 0,0,0
	  // so pull it back
	  camera.position.z = 300;
	
	  return camera;
	}
	
	function getEnvironmentMap() {
	  // urls of the images, one per half axis
	  var urls = ['lib/textures/pos-x.png', 'lib/textures/neg-x.png', 'lib/textures/pos-y.png', 'lib/textures/neg-y.png', 'lib/textures/pos-z.png', 'lib/textures/neg-z.png'];
	
	  // wrap it up into the object that we need
	  var cubemap = THREE.ImageUtils.loadTextureCube(urls);
	
	  // set the format, likely RGB unless you've gone crazy
	  cubemap.format = THREE.RGBFormat;
	  return cubemap;
	}
	
	function getTorusKnot() {
	  var environmentMap = getEnvironmentMap();
	
	  // create the torusKnot's material
	  var torusKnotMaterial = new THREE.MeshPhongMaterial({
	    color: 0xededed,
	    envMap: environmentMap
	  });
	
	  // set up the sphere vars
	  var radius = 40,
	      segments = 15,
	      rings = 100;
	
	  // create a new mesh with
	  // sphere geometry - we will cover
	  // the sphereMaterial next!
	  torusKnot = new THREE.Mesh(new THREE.TorusKnotGeometry(radius, segments, rings, 100), torusKnotMaterial);
	
	  return torusKnot;
	}
	
	function createPointLight() {
	  // create a point light
	  var pointLight = new THREE.PointLight(0xFFFFFF);
	
	  // set its position
	  pointLight.position.x = 10;
	  pointLight.position.y = 50;
	  pointLight.position.z = 130;
	
	  return pointLight;
	}
	
	function animate() {
	  // method tells the browser that you wish to perform an animation and
	  // requests that the browser call a specified function to update an animation before the next repaint.
	  requestAnimationFrame(animate);
	
	  torusKnot.rotation.x += 0.01;
	  torusKnot.rotation.y += 0.02;
	
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