const lasers=[]

document.addEventListener("keydown",(e)=>{

if(e.code==="Space") fireLaser()

})

function fireLaser(){

const geo = new THREE.CylinderGeometry(0.05,0.05,3)

const mat = new THREE.MeshBasicMaterial({
color:0x00ffff
})

const laser = new THREE.Mesh(geo,mat)

laser.rotation.x=Math.PI/2

laser.position.copy(ship.position)

laser.userData={speed:3}

scene.add(laser)

lasers.push(laser)

}

function updateLasers(){

lasers.forEach(l=>{

l.position.z -= l.userData.speed

enemies.forEach((e,i)=>{

if(l.position.distanceTo(e.position)<2){

scene.remove(e)
enemies.splice(i,1)

spawnEnemy()

}

})

})

}