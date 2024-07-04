const text_input_containers = document.querySelectorAll('.input_container-text');
const text_input_icons = document.querySelectorAll('.input_icon');
const radio_input_containers = document.querySelectorAll('.input_container-radio');
const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const text_inputs = [];
const radio_inputs = [];
const result_section_empty = document.querySelector('.result_section-empty');
const result_section_calculated = document.querySelector('.result_section-calculated');
const monthly_result = document.querySelector('.monthly-result');
const total_result = document.querySelector('.total-result');
let error_msg;
let error_count = 5;
let principle;
let years;
let interest;
let monthly_payments;
let total_payment;

text_input_containers.forEach(text_input_container => {
    text_input_container.addEventListener('click', () => {
        let immediate_text_icon = text_input_container.firstElementChild;
        clearTextStyles();
        text_input_container.classList.add('lime-border'); 
        immediate_text_icon.classList.add('lime-bg');
        error_msg = text_input_container.nextElementSibling;
        error_msg.style.display = 'none';
    })
    text_inputs.push(text_input_container.firstElementChild.nextElementSibling)
        
})

radio_input_containers.forEach(radio_input_container => {
    radio_input_container.addEventListener('click', () => {
        clearTextStyles();
        clearRadioStyles();
        radio_input_container.classList.add('lime-border');
        radio_input_container.classList.add('lime-bg-radio');
        error_msg = radio_input_container.parentElement.lastElementChild;
        error_msg.style.display = 'none';
    })
    radio_inputs.push(radio_input_container.firstElementChild)
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
    clearTextStyles();
    calculateMortgage();
    error_count = 5;
})

function validateForm() {
    text_inputs.forEach(text_input => {
        if(text_input.value == '') {
            error_msg = text_input.parentElement.nextElementSibling;
            error_msg.style.display = 'block';
            
        } else{
            error_count--;
        }
    })
    radio_inputs.forEach(radio_input => {
        if(!checkRadios()) {
            error_msg = radio_input.parentElement.parentElement.lastElementChild;
            error_msg.style.display = 'block';
        } else{
            error_count--;
        }
    })
}

function clearAll() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
        input.checked = false; 
    })
    clearTextStyles();
    clearRadioStyles();
    clearErrorStyles();
    error_count = 5;
    result_section_empty.style.display = 'flex';
    result_section_calculated.style.display = 'none';

}

function clearTextStyles() {
    for(let i = 0; i < text_input_containers.length; i++) {
        text_input_containers[i].classList.remove('lime-border');
        text_input_icons[i].classList.remove('lime-bg');
    }
}

function clearRadioStyles() {
    for(let i = 0; i < radio_input_containers.length; i++) {
        radio_input_containers[i].classList.remove('lime-bg-radio');
        radio_input_containers[i].classList.remove('lime-border');
    }
}

function clearErrorStyles() {
    const error_msgs = document.querySelectorAll('.error_msg');
    error_msgs.forEach(error_msg => {
        error_msg.style.display = 'none';
    })
    
}

function checkRadios() {
    for(let i = 0; i < radio_inputs.length; i++) {
        if(radio_inputs[i].checked) {
            return true
        }
    }
}

function calculateMortgage() {
    if(error_count == 0) {
        principle = Number(text_inputs[0].value);
        years = Number(text_inputs[1].value) * 12;
        interest = Number(text_inputs[2].value)/100/12;

        monthly_payments = (principle * interest * Math.pow((1 + interest), years)) / (Math.pow((1 + interest), years) - 1);
        total_payment = monthly_payments * 300;
    
        monthly_payments = monthly_payments.toFixed(2);
        total_payment = total_payment.toFixed(2);
        displayResult();
    }


}

function displayResult() {
    result_section_empty.style.display = 'none';
    result_section_calculated.style.display = 'block';

    monthly_result.textContent = `£${monthly_payments}`;
    total_result.textContent = `£${total_payment}`;
}
