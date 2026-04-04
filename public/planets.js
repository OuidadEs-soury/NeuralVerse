const planets = []

function createPlanet(){

const geo = new THREE.SphereGeometry(2,64,64)

const mat = new THREE.MeshStandardMaterial({
color: Math.random()*0xffffff
})

const planet = new THREE.Mesh(geo,mat)

planet.position.set(
(Math.random()-0.5)*100,
(Math.random()-0.5)*50,
(Math.random()-0.5)*100
)

planet.userData = {
orbitSpeed: Math.random()*0.002 + 0.001,
rotationSpeed: Math.random()*0.02
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