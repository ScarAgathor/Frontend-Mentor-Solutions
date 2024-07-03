const form = document.querySelector("form");
const modal = document.querySelector('.modal');
const inputs = form.querySelectorAll('input');
const text_inputs = [];
const query_inputs = [];
const check_input = inputs[5]
const text_area = form.querySelector('textarea');
let error;
let trueCount = 0;

inputs.forEach(input => {
    if(input.type == 'text') {
        text_inputs.push(input)
    }
    if(input.type == 'radio') {
        query_inputs.push(input)
    }
})

const email = text_inputs[2];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    toggleDisplay();
    displayModal();
})

function toggleDisplay() {
    text_inputs.forEach(text => {
        error = text.nextElementSibling;
        if(text.value == '') {
            error.style.display = 'block';
            text.addEventListener('click', () => {
                error = text.nextElementSibling;
                error.style.display = 'none';
            })
            text.addEventListener('focus', () => {
                error = text.nextElementSibling;
                error.style.display = 'none';
            })
        } else {
            trueCount++;
        }
    })

    if(!checkEmail(email.value)) {
        error = email.nextElementSibling;
        error.style.display = 'block'
    }

    if(!checkRadio()) {
        error = document.querySelector('.query_container').nextElementSibling;
        error.style.display = 'block';
        query_inputs.forEach(query => {
            query.addEventListener('click', () => {
                error = document.querySelector('.query_container').nextElementSibling;
                error.style.display = 'none';
            })
        })
    } else {
        trueCount++;
    }

    if(text_area.value == '') {
        error = text_area.nextElementSibling;
        error.style.display = 'block';
        text_area.addEventListener('click', () => {
            error = text_area.nextElementSibling;
            error.style.display = 'none';
        })
    } else {
        trueCount++
    }

    if(!check_input.checked) {
        error = check_input.parentElement.nextElementSibling;
        error.style.display = 'block';
        check_input.addEventListener('click', () => {
            error = check_input.parentElement.nextElementSibling;
            error.style.display = 'none';
        })
    } else {
        trueCount++
    }    
}

function checkRadio() {
    for(let i = 0; i < query_inputs.length; i++) {
        if(query_inputs[i].checked) {
            return true;
        }
    }
    
}

function checkEmail(email) {
    //learn how to translate regular expressions
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email)
}

query_inputs.forEach(query => {
    query.addEventListener('click', () => {
        for(i = 0; i < query_inputs.length; i++) {
            query_inputs[i].parentElement.classList.remove('queried');
        }
        query.parentElement.classList.add('queried')
    })
    query.parentElement.addEventListener('keydown', key => {
        if(key.key == 'Enter') {
            query.checked = 'checked'
            for(i = 0; i < query_inputs.length; i++) {
                query_inputs[i].parentElement.classList.remove('queried');
            }
            query.parentElement.classList.add('queried')
        }
    })
})

check_input.addEventListener('keydown', key => {
    if(key.key == 'Enter') {
        check_input.checked = 'checked'   
    }
})

function displayModal() {
    if(count > 6) {
        modal.style.display = 'block';
    }
        
    

    setTimeout(() => {
        modal.style.display = 'none';
    }, 2000);
}