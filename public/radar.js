const radarCanvas = document.createElement("canvas")
radarCanvas.width=200
radarCanvas.height=200
radarCanvas.style.position="absolute"
radarCanvas.style.bottom="20px"
radarCanvas.style.right="20px"
radarCanvas.style.background="rgba(0,0,0,0.6)"
document.body.appendChild(radarCanvas)

const radarCtx = radarCanvas.getContext("2d")

function updateRadar(){

radarCtx.clearRect(0,0,200,200)

radarCtx.fillStyle="white"

planets.forEach(p=>{

const x = 100 + (p.position.x - ship.position.x)*0.2
const y = 100 + (p.position.z - ship.position.z)*0.2

radarCtx.fillRect(x,y,4,4)

})

radarCtx.fillStyle="red"

radarCtx.fillRect(100,100,6,6)

}