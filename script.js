const sunMoonContainer = document.querySelector('.sun-moon-container')

document.querySelector('.toggleButton').addEventListener('click', () => {
    document.body.classList.toggle('darkMode')
    const currentRotation = parseInt(getComputedStyle(sunMoonContainer)
    .getPropertyValue('--rotation'))
    sunMoonContainer.style.setProperty('--rotation', currentRotation + 180)
})