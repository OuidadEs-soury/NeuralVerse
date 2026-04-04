const keys={}

document.addEventListener("keydown",e=>{

keys[e.key]=true

})

document.addEventListener("keyup",e=>{

keys[e.key]=false

})

function updateControls(){

if(keys["w"]) ship.position.z-=0.5
if(keys["s"]) ship.position.z+=0.5
if(keys["a"]) ship.position.x-=0.5
if(keys["d"]) ship.position.x+=0.5

camera.position.copy(ship.position)

}