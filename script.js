let currentAudio = null

const buttons = document.querySelectorAll('.sound-button')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const soundPath = button.dataset.sound
    const audio = new Audio(soundPath)

    if (currentAudio !== null) {
      currentAudio.pause()
    }

    audio.play()
    currentAudio = audio
  })
})
