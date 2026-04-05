function animate(){

requestAnimationFrame(animate)
createTerrainPlanet()

updateControls()

updatePlanets()

updateRadar()

renderer.render(scene,camera)

}

animate()