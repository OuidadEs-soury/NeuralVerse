function createNebula(){

const nebulaGeo = new THREE.SphereGeometry(400,32,32)

const nebulaMat = new THREE.MeshBasicMaterial({

color:0x5522ff,
transparent:true,
opacity:0.15,
side:THREE.BackSide

})

const nebula = new THREE.Mesh(nebulaGeo,nebulaMat)

scene.add(nebula)

}