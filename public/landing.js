function checkPlanetLanding(){

planets.forEach(p=>{

const distance = ship.position.distanceTo(p.position)

if(distance < 5){

document.getElementById("lore").innerText =
"Landing on planet. Civilization: "+p.userData.civilization

}

})

}