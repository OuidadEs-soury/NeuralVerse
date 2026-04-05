const enemies=[]

function spawnEnemy(){

const geo = new THREE.ConeGeometry(1,4,8)

const mat = new THREE.MeshStandardMaterial({
color:0xff0000,
emissive:0x550000
})

const enemy = new THREE.Mesh(geo,mat)

enemy.rotation.x=Math.PI/2

enemy.position.set(
(Math.random()-0.5)*200,
(Math.random()-0.5)*50,
(Math.random()-0.5)*200
)

enemy.userData={
speed:0.2
}

scene.add(enemy)

enemies.push(enemy)

}

for(let i=0;i<5;i++) spawnEnemy()

function updateEnemies(){

enemies.forEach(e=>{

e.lookAt(ship.position)

e.position.x += (ship.position.x-e.position.x)*0.002
e.position.z += (ship.position.z-e.position.z)*0.002

})

}