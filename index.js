var init = function () {
  var width = 800;
  var height = 600;

  //create renderer
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width,height);
  document.body.appendChild(renderer.domElement);

  //create scene
  var scene = new THREE.Scene();

  //create camera
  var camera = new THREE.PerspectiveCamera(45, width/ height, 1, 1000);

  //create geometry and material
  var geometry = new THREE.BoxGeometry(1,1,1);
  var material = new THREE.MeshPhongMaterial({ color: 0x0000ff});

  //create Mesh and add to scene
  var box = new THREE.Mesh(geometry, material);
  box.position.z = -5;
  scene.add(box);

  //create light
  var light = new THREE.DirectionalLight(0xffffff);
  light.position.set(1,1,1);
  scene.add(light);

  var update = function () {
    requestAnimationFrame(update);
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  update();
}
window.addEventListener('DOMContentLoaded', init);
