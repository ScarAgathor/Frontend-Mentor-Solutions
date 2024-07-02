const form = document.querySelector('form');
const errorIcon = document.querySelector('.error-icon');
const error = document.querySelector('.error');
const input = form.querySelector('input');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!checkEmail(input.value)) {
        error.style.opacity = '1';
        errorIcon.style.opacity = '1';
    }
})

input.addEventListener('click', () => {
    error.style.opacity = '0';
    errorIcon.style.opacity = '0';
    if(error.style.opacity == '1') {
        input.value = null;
    }
})

function checkEmail(email) {
    //learn how to translate regular expressions
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email)
}

