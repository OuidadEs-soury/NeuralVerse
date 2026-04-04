const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer({
canvas: document.getElementById("space"),
antialias: true
})

renderer.setSize(window.innerWidth, window.innerHeight)

camera.position.z = 10

const light = new THREE.PointLight(0xffffff, 1)

light.position.set(20,20,20)

scene.add(light)

function gameLoop(){

requestAnimationFrame(gameLoop)

updateControls()

updatePlanets()

renderer.render(scene,camera)

}

gameLoop()