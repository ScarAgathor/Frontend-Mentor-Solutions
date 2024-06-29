const share = document.querySelector('.share_button-cont');
const modal = document.querySelector('.share_links');
const article = document.getElementById('a');
const clicked = document.querySelector('.clicked');




share.addEventListener('click', () => {
    toggle()
})

function checkWidth() {
    if(article.clientWidth <= 400) {
        clicked.style.display = 'flex'
    }
    else {
        clicked.style.display = 'none'
        mo
    }
}

function toggle() {
    if(modal.style.opacity == '1') {
        modal.style.opacity = '0'
        modal.style.zIndex = -1;

        if(article.clientWidth <= 400) {
            clicked.style.display = 'flex'

        }
    } else {
        modal.style.opacity = '1'
        modal.style.zIndex = 1;

        if(article.clientWidth <= 400) {
            clicked.style.display = 'flex'
        }
    }
}

setInterval(checkWidth, 100);

clicked.addEventListener('click', () => {
    modal.style.opacity = '0'
    modal.style.zIndex = -1;
})