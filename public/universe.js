const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer({
canvas: document.getElementById("universe")
})

renderer.setSize(window.innerWidth, window.innerHeight)

camera.position.z = 5

const starsGeometry = new THREE.BufferGeometry()

const starsCount = 5000

const positions = new Float32Array(starsCount * 3)

for (let i = 0; i < starsCount * 3; i++) {

positions[i] = (Math.random() - 0.5) * 1000

}

starsGeometry.setAttribute(
"position",
new THREE.BufferAttribute(positions, 3)
)

const starsMaterial = new THREE.PointsMaterial({
color: 0xffffff
})

const stars = new THREE.Points(starsGeometry, starsMaterial)

scene.add(stars)

function animate() {

requestAnimationFrame(animate)

stars.rotation.y += 0.0005

renderer.render(scene, camera)

}

animate()