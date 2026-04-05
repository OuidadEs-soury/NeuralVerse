const listener = new THREE.AudioListener()

camera.add(listener)

const sound = new THREE.Audio(listener)

const audioLoader = new THREE.AudioLoader()

audioLoader.load(

"https://cdn.pixabay.com/download/audio/2022/03/15/audio_space_ambient.mp3",

function(buffer){

sound.setBuffer(buffer)
sound.setLoop(true)
sound.setVolume(0.5)
sound.play()

}

)