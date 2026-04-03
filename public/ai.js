async function generate(){

const prompt=document.getElementById("prompt").value

const res=await fetch("/api/ai/generate",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({prompt})

})

const data=await res.json()

document.getElementById("result").innerText=data.description

createPlanet()

}