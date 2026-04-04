const geo = new THREE.SphereGeometry(5,64,64)

const mat = new THREE.MeshBasicMaterial({

color:0x000000

})

const blackhole = new THREE.Mesh(geo,mat)

blackhole.position.set(0,0,-80)

scene.add(blackhole)

function blackHoleGravity(){

const distance = ship.position.distanceTo(blackhole.position)

if(distance < 50){

ship.position.lerp(blackhole.position,0.01)

}

}