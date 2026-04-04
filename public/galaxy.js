const starGeometry = new THREE.BufferGeometry()

const starCount = 20000

const starPositions = new Float32Array(starCount * 3)

for(let i = 0; i < starCount * 3; i++){

starPositions[i] = (Math.random() - 0.5) * 2000

}

starGeometry.setAttribute(
"position",
new THREE.BufferAttribute(starPositions,3)
)

const starMaterial = new THREE.PointsMaterial({
color:0xffffff,
size:0.7
})

const stars = new THREE.Points(starGeometry, starMaterial)

scene.add(stars)