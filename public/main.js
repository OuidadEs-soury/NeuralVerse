function animate(){

requestAnimationFrame(animate)

updateControls()

updatePlanets()

updateRadar()

renderer.render(scene,camera)

}

animate()