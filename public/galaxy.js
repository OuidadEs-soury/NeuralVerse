const starsGeo=new THREE.BufferGeometry()

const starCount=20000

const starPos=new Float32Array(starCount*3)

for(let i=0;i<starCount*3;i++){

starPos[i]=(Math.random()-0.5)*2000

}

starsGeo.setAttribute(

"position",

new THREE.BufferAttribute(starPos,3)

)

const starsMat=new THREE.PointsMaterial({

color:0xffffff,
size:0.7

})

const stars=new THREE.Points(starsGeo,starsMat)

scene.add(stars)