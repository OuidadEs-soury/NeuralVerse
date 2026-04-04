const planets = []

function randomCivilization(){

const civs=[
"Ancient Alien Empire",
"Peaceful Ocean Civilization",
"Robotic AI Colony",
"Primitive Tribal Species",
"Highly Advanced Galactic Society"
]

return civs[Math.floor(Math.random()*civs.length)]

}

function createPlanet(){

const size = Math.random()*3+1

const geo = new THREE.SphereGeometry(size,64,64)

const mat = new THREE.MeshStandardMaterial({

color:Math.random()*0xffffff

})

const planet = new THREE.Mesh(geo,mat)

planet.position.set(

(Math.random()-0.5)*200,
(Math.random()-0.5)*100,
(Math.random()-0.5)*200

)

planet.userData = {

orbitSpeed:Math.random()*0.002,

rotationSpeed:Math.random()*0.01,

civilization:randomCivilization(),

temperature:Math.floor(Math.random()*500),

resources:Math.floor(Math.random()*100)

}

if(Math.random()>0.6){

const ringGeo = new THREE.RingGeometry(size+0.5,size+1.5,64)

const ringMat = new THREE.MeshBasicMaterial({

color:0xffffff,
side:THREE.DoubleSide

})

const ring = new THREE.Mesh(ringGeo,ringMat)

ring.rotation.x = Math.PI/2

planet.add(ring)

}

scene.add(planet)

planets.push(planet)

}

function updatePlanets(){

planets.forEach(p=>{

p.rotation.y += p.userData.rotationSpeed

p.position.x += Math.sin(Date.now()*p.userData.orbitSpeed)*0.1

})

}