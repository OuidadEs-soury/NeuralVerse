function createPlanet(){

const geometry=new THREE.SphereGeometry(1,64,64)

const material=new THREE.MeshStandardMaterial({

color:Math.random()*0xffffff

})

const planet=new THREE.Mesh(geometry,material)

planet.position.x=(Math.random()-0.5)*10
planet.position.y=(Math.random()-0.5)*6

scene.add(planet)

}