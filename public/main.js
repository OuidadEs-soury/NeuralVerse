function animate(){

requestAnimationFrame(animate)

updateControls()

updatePlanets()

updateEnemies()

updateLasers()

updateRadar()

checkDock()

renderer.render(scene,camera)

}

animate()