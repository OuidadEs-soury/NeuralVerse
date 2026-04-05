function createTerrainPlanet(){

const geo = new THREE.SphereGeometry(6,64,64)

const pos = geo.attributes.position

for(let i=0;i<pos.count;i++){

const v = new THREE.Vector3().fromBufferAttribute(pos,i)

const noise = Math.random()*0.5

v.multiplyScalar(1+noise)

pos.setXYZ(i,v.x,v.y,v.z)

}

geo.computeVertexNormals()

const mat = new THREE.MeshStandardMaterial({
color:0x228833
})

const planet = new THREE.Mesh(geo,mat)

planet.position.set(100,0,-150)

scene.add(planet)

}