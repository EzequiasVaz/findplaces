let colapsedMenu = document.querySelector(".colapsed-menu")
let menuPrincipalMobile =  document.querySelector('.menu-principal-mobile')
let hamburguerItens = document.querySelectorAll('.hamburguer-item-1, .hamburguer-item-2, .hamburguer-item-3')

/*menu hamburguer animação*/
colapsedMenu.addEventListener('click', () => {

    if (colapsedMenu.classList.contains("active-menu")) {
        colapsedMenu.classList.remove("active-menu")
        hamburguerItens.forEach(item => {
            item.style.animation = ''
            setTimeout(() => {item.style.animation = "returnColapsedMenu 0.5s linear" })            
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
                setTimeout(() => { item.style.animation = "btnCloseMenuEntranceBottom 1s ease forwards"})}
            if (item.classList.contains('hamburguer-item-2')) {
                item.style.opacity = 0
            }    
            if (item.classList.contains('hamburguer-item-3')) {
                item.style.animation = ''
                setTimeout(() => { item.style.animation = "btnCloseMenuEntranceTop 1s ease forwards"})
            }   
        })
        menuPrincipalMobile.style.display = 'flex'
    }

}) 

/*Adicionando imagem diferente somente para mobile*/

let mockupsAboutAppMobile = document.querySelector('.mockups-about-app-mobile')
let mockupAboutApp = document.querySelector('.mockup-about-app')
let pageWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; 

console.log(pageWidth)

if (pageWidth <= 600) {
    mockupAboutApp.style.display = 'none'
    let img1 = document.createElement("img")
    let img2 = document.createElement("img")
    img1.src = "../assets/image/mockup-about-app-mobile(1).svg"
    img1.classList.add("mockup-about-app-mobile")
    img2.src = "../assets/image/mockup-about-app-mobile(2).svg"
    img2.classList.add("mockup-about-app-mobile")
    mockupsAboutAppMobile.appendChild(img1)
    mockupsAboutAppMobile.appendChild(img2)
    mockupsAboutAppMobile.style.display = 'flex'
}

/**/

