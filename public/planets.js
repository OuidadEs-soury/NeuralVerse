const planets=[]

function randomCivilization(){

const civs=[
"Ancient Empire",
"Machine AI Colony",
"Peaceful Water Species",
"Hostile Insectoids",
"Galactic Traders"
]

return civs[Math.floor(Math.random()*civs.length)]

}

function createCity(planet){

const geo = new THREE.BoxGeometry(0.5,2,0.5)

const mat = new THREE.MeshStandardMaterial({

color:0xffffff

})

for(let i=0;i<20;i++){

const building = new THREE.Mesh(geo,mat)

building.position.set(

(Math.random()-0.5)*3,
1,
(Math.random()-0.5)*3

)

planet.add(building)

}

}

function createPlanet(){

const size=Math.random()*3+1

const geo=new THREE.SphereGeometry(size,64,64)

const mat=new THREE.MeshStandardMaterial({

color:Math.random()*0xffffff

})

const planet=new THREE.Mesh(geo,mat)

planet.position.set(

(Math.random()-0.5)*300,
(Math.random()-0.5)*100,
(Math.random()-0.5)*300

)

planet.userData={

civilization:randomCivilization()

}

if(Math.random()>0.5){

createCity(planet)

}

scene.add(planet)

planets.push(planet)

}

function updatePlanets(){

planets.forEach(p=>{

p.rotation.y+=0.003

})

}