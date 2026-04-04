async function generatePlanet(){

const name=document.getElementById("planetName").value

const res=await fetch("/api/planet",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({name})

})

const data=await res.json()

document.getElementById("lore").innerText=data.description

createPlanet()

}