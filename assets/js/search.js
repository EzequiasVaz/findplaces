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