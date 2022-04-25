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