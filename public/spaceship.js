const shipGeo = new THREE.ConeGeometry(0.6,2,32)

const shipMat = new THREE.MeshStandardMaterial({
color:0xff0000
})

const ship = new THREE.Mesh(shipGeo,shipMat)

ship.rotation.x = Math.PI/2

scene.add(ship)

const fireGeo = new THREE.ConeGeometry(0.3,1,16)

const fireMat = new THREE.MeshBasicMaterial({
color:0xff6600
})

const thruster = new THREE.Mesh(fireGeo,fireMat)

thruster.position.z = 1

thruster.rotation.x = Math.PI

ship.add(thruster)