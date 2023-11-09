import * as THREE from 'three';
import { FontLoader } from 'https://unpkg.com/three@0.138.3/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'https://unpkg.com/three@0.138.3/examples/jsm/geometries/TextGeometry.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1 , 1000); 

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({color: 0xd16536});
const cube = new THREE.Mesh(geometry, material);
cube.receiveShadow = true;
cube.castShadow = true;
scene.add(cube);

const plane = new THREE.PlaneGeometry(5, 5, 5);
const planeMaterial = new THREE.MeshPhongMaterial({color: 0x00ff00});
const planeMesh = new THREE.Mesh(plane, planeMaterial);
planeMesh.rotation.set(-1.9 * Math.PI / 4, 0, 0);
planeMesh.position.set(0, -1, 0);
planeMesh.scale.set(2, 1, 1);
scene.add(planeMesh);

const fontLoader = new FontLoader();

fontLoader.load('../../fonts/Fair Prosper_Regular.json', function(font) {
    const text = new TextGeometry('Hello World', {
        font: font,
        size: 1,
        height: 0.1,
        curveSegments: 12,
    });

    const textMaterial = new THREE.MeshStandardMaterial({color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 1000});
    const textMesh = new THREE.Mesh(text, textMaterial);
    textMesh.position.set(-4, 0, 0);

    scene.add(textMesh);
});

const light = new THREE.PointLight(0xffffff, 1, 100);
scene.add(light);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.005;
    cube.rotation.y += 0.02;
    cube.rotation.z += 0.015;

    renderer.render(scene, camera);
}

animate();