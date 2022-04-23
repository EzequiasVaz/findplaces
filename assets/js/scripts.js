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

/*Adicionando imagem diferente somente para mobile*/

let mockupsAboutAppMobile = document.querySelector('.mockups-about-app-mobile')
let mockupAboutApp = document.querySelector('.mockup-about-app')
let pageWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

if (pageWidth <= 600 && urlAtual == '/findplaces/' || pageWidth <= 600 && urlAtual == '/findplaces/index.html'  ) {
    mockupAboutApp.style.display = 'none'
    let img1 = document.createElement("img")
    let img2 = document.createElement("img")
    img1.src = "./assets/image/mockup-about-app-mobile(1).svg"
    img1.classList.add("mockup-about-app-mobile")
    img2.src = "./assets/image/mockup-about-app-mobile(2).svg"
    img2.classList.add("mockup-about-app-mobile")
    mockupsAboutAppMobile.appendChild(img1)
    mockupsAboutAppMobile.appendChild(img2)
    mockupsAboutAppMobile.style.display = 'flex'
}

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


/*movimentando ul do status com os buttons*/

let statusList = document.querySelector('.status-list')
let btnGoLeft = document.querySelector('.arrow-go-left')
let btnGoRight = document.querySelector('.arrow-go-right')
let statusWidth = statusList.scrollWidth


btnGoRight.addEventListener('click', () => {
    statusList.scrollLeft -= -100 * 3    
})

btnGoLeft.addEventListener('click', () => {
    statusList.scrollLeft -= 100 * 3    
})



