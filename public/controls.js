const keys = {}

const speed = 1

document.addEventListener("keydown", e => {
keys[e.key.toLowerCase()] = true
})

document.addEventListener("keyup", e => {
keys[e.key.toLowerCase()] = false
})

function updateControls(){

if(keys["w"]) ship.position.z -= speed

if(keys["s"]) ship.position.z += speed

if(keys["a"]) ship.position.x -= speed

if(keys["d"]) ship.position.x += speed

camera.position.x = ship.position.x
camera.position.z = ship.position.z + 10
camera.position.y = ship.position.y + 5

camera.lookAt(ship.position)

}