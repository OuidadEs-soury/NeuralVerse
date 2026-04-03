const scene=new THREE.Scene()

const camera=new THREE.PerspectiveCamera(

75,
window.innerWidth/window.innerHeight,
0.1,
1000

)

const renderer=new THREE.WebGLRenderer({

canvas:document.getElementById("space")

})

renderer.setSize(window.innerWidth,window.innerHeight)

camera.position.z=5

const geometry=new THREE.BufferGeometry()

const count=10000

const positions=new Float32Array(count*3)

for(let i=0;i<count*3;i++){

positions[i]=(Math.random()-0.5)*800

}

geometry.setAttribute("position",

new THREE.BufferAttribute(positions,3)

)

const material=new THREE.PointsMaterial({

size:0.7,
color:0xffffff

})

const stars=new THREE.Points(geometry,material)

scene.add(stars)

function animate(){

requestAnimationFrame(animate)

stars.rotation.y+=0.0003

renderer.render(scene,camera)

}

animate()