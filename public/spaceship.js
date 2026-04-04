const shipGeo=new THREE.ConeGeometry(0.5,2,32)

const shipMat=new THREE.MeshStandardMaterial({

color:0xff0000

})

const ship=new THREE.Mesh(shipGeo,shipMat)

ship.rotation.x=Math.PI/2

scene.add(ship)