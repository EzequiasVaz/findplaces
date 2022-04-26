/* scripts principais  */


let colapsedMenu = document.querySelector(".colapsed-menu")
let menuPrincipalMobile = document.querySelector('.menu-principal-mobile')
let hamburguerItens = document.querySelectorAll('.hamburguer-item-1, .hamburguer-item-2, .hamburguer-item-3')
let urlAtual = window.location.pathname /*busca só o local depois do host*/

/*menu hamburguer animação*/
colapsedMenu.addEventListener('click', () => {

    if (colapsedMenu.classList.contains("active-menu")) {
        colapsedMenu.classList.remove("active-menu")
        hamburguerItens.forEach(item => {
            item.style.animation = ''
            setTimeout(() => { item.style.animation = "returnColapsedMenu 0.5s linear" })
            if (item.classList.contains('hamburguer-item-2')) {
                item.style.opacity = 1
            }
        });
        menuPrincipalMobile.style.display = 'none'

    } else {
        colapsedMenu.classList.add("active-menu")
        hamburguerItens.forEach(item => {
            if (item.classList.contains('hamburguer-item-1')) {
                item.style.animation = ''
                setTimeout(() => { item.style.animation = "btnCloseMenuEntranceBottom 1s ease forwards" })
            }
            if (item.classList.contains('hamburguer-item-2')) {
                item.style.opacity = 0
            }
            if (item.classList.contains('hamburguer-item-3')) {
                item.style.animation = ''
                setTimeout(() => { item.style.animation = "btnCloseMenuEntranceTop 1s ease forwards" })
            }
        })
        menuPrincipalMobile.style.display = 'flex'
    }

})


/*marcando pagina atual*/

let searchPage = document.getElementById("search")
let placesPage = document.getElementById("places")
let ContactPage = document.getElementById('contactUs')


if (urlAtual === '/findplaces/search.html') {
    searchPage.classList.add('active')
} else if (urlAtual === '/findplaces/places.html') {
    placesPage.classList.add('active')
} else if (urlAtual == '/findplaces/contact-us.html') {
    ContactPage.classList.add('active')
}











