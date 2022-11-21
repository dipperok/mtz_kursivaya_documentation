function slidesPlagin(slideNumber = 2) {
    const slides = document.querySelectorAll('.slide')

    slides[slideNumber].classList.add('active')

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActive()

            slide.classList.add('active')
        })
    }

    function clearActive() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

function randomNumber(min = 0, max = 1) {
    if (min >= max) { return max; }
    return Math.floor(Math.random() * (max - min) + min)
}

slidesPlagin(randomNumber(0, 3))