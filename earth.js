const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('earthCanvas'), alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 3;

const geometry = new THREE.SphereGeometry(1, 64, 64);
const texture = new THREE.TextureLoader().load('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/earth-day.jpg');
const material = new THREE.MeshBasicMaterial({ map: texture });

const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

function animate() {
  requestAnimationFrame(animate);
  earth.rotation.y += 0.002;
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
