const stationGeo = new THREE.TorusGeometry(10,2,16,100)

const stationMat = new THREE.MeshStandardMaterial({
color:0xaaaaaa
})

const station = new THREE.Mesh(stationGeo,stationMat)

station.position.set(0,0,-100)

scene.add(station)

function checkDock(){

const dist = ship.position.distanceTo(station.position)

if(dist<15){

document.getElementById("location").innerText="Docked at Station"

}

}