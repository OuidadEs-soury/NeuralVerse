function createPlanet(){

const geo=new THREE.SphereGeometry(2,64,64)

const mat=new THREE.MeshStandardMaterial({

color:Math.random()*0xffffff

})

const planet=new THREE.Mesh(geo,mat)

planet.position.set(

(Math.random()-0.5)*100,
(Math.random()-0.5)*100,
(Math.random()-0.5)*100

)

scene.add(planet)

}