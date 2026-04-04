const wormGeo = new THREE.TorusGeometry(8,2,32,100)

const wormMat = new THREE.MeshStandardMaterial({

color:0x00ffff,
emissive:0x00ffff

})

const wormhole = new THREE.Mesh(wormGeo,wormMat)

wormhole.position.set(100,0,-200)

scene.add(wormhole)

function checkWormhole(){

const dist = ship.position.distanceTo(wormhole.position)

if(dist < 10){

ship.position.set(
(Math.random()-0.5)*500,
(Math.random()-0.5)*100,
(Math.random()-0.5)*500
)

}

}