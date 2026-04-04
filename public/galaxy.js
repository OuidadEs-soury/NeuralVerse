const starsGeometry = new THREE.BufferGeometry()

const starCount = 30000

const starPositions = new Float32Array(starCount*3)

for(let i=0;i<starCount;i++){

const i3=i*3

const radius = Math.random()*1000

const angle = radius*0.3

starPositions[i3] = Math.cos(angle)*radius
starPositions[i3+1] = (Math.random()-0.5)*200
starPositions[i3+2] = Math.sin(angle)*radius

}

starsGeometry.setAttribute(

"position",
new THREE.BufferAttribute(starPositions,3)

)

const starsMaterial = new THREE.PointsMaterial({

color:0xffffff,
size:0.8

})

const galaxy = new THREE.Points(starsGeometry,starsMaterial)

scene.add(galaxy)