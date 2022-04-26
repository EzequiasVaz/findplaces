/*movimentando ul do status com os buttons*/
let btnLogin = document.querySelector('.btn-login-search-page')
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

btnLogin.addEventListener('click', () => {
    window.location.replace('https://ezequiasvaz.github.io/findplaces/login.html')
})

