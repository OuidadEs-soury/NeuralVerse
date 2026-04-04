for(let i=0;i<100;i++){

const geo=new THREE.SphereGeometry(10,32,32)

const mat=new THREE.MeshBasicMaterial({

color:0x4400ff,

transparent:true,

opacity:0.05

})

const nebula=new THREE.Mesh(geo,mat)

nebula.position.set(

(Math.random()-0.5)*500,
(Math.random()-0.5)*500,
(Math.random()-0.5)*500

)

scene.add(nebula)

}