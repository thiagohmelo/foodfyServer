const cards = document.querySelectorAll('.card')



for (let card of cards) {
    card.addEventListener('click', function () {
        const imgId = card.getAttribute('id')
        window.location.href = `/inforecipe.html?id=${imgId}`

    })
}


