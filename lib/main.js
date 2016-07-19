require('./polyfills');

let scene, camera, renderer;
let geometry, material, mesh, torusKnot;

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
  var pointLight = createPointLight()

  // add to the scene
  scene.add(pointLight);

  // start the renderer
  renderer.setSize( window.innerWidth, window.innerHeight );

  // attach the render-supplied DOM element
  document.body.appendChild( renderer.domElement );

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

  var camera =
    new THREE.PerspectiveCamera(
      VIEW_ANGLE,
      ASPECT,
      NEAR,
      FAR);

  // the camera starts at 0,0,0
  // so pull it back
  camera.position.z = 300;

  return camera;
}

function getEnvironmentMap() {
  // urls of the images, one per half axis
  var urls = [
    'lib/textures/pos-x.png',
    'lib/textures/neg-x.png',
    'lib/textures/pos-y.png',
    'lib/textures/neg-y.png',
    'lib/textures/pos-z.png',
    'lib/textures/neg-z.png'
  ];

  // wrap it up into the object that we need
  var cubemap = THREE.ImageUtils.loadTextureCube(urls);

  // set the format, likely RGB unless you've gone crazy
  cubemap.format = THREE.RGBFormat;
  return cubemap;
}

function getTorusKnot() {
  var environmentMap = getEnvironmentMap();

  // create the torusKnot's material
  var torusKnotMaterial =
    new THREE.MeshPhongMaterial(
      {
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
  torusKnot = new THREE.Mesh(
    new THREE.TorusKnotGeometry(
      radius,
      segments,
      rings,
      100),
    torusKnotMaterial);

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
  requestAnimationFrame( animate );

  torusKnot.rotation.x += 0.01;
  torusKnot.rotation.y += 0.02;

  renderer.render( scene, camera );
}
