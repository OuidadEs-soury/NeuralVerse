const geo=new THREE.SphereGeometry(3,64,64)

const mat=new THREE.MeshBasicMaterial({

color:0x000000

})

const blackhole=new THREE.Mesh(geo,mat)

blackhole.position.set(30,0,0)

scene.add(blackhole)