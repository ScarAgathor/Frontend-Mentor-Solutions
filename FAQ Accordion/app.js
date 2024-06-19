const FAQs = document.querySelectorAll(".faq-clickable");

const icons = document.querySelectorAll('.icon-state');

let icon;
let answer;


FAQs.forEach(faq => {
        
    faq.addEventListener("click", (f) => {
        icon = faq.lastElementChild
        answer = faq.nextElementSibling;
        changeIcon(icon)
        displayAnswers(answer)

    })   
    
    faq.addEventListener("keydown", (key) => {
        if(key.key == "Enter") {
            icon = faq.lastElementChild
            answer = faq.nextElementSibling;
            changeIcon(icon)
            displayAnswers(answer) 
        } 
    })
})


function changeIcon(icon) {
    if(icon.src == "http://127.0.0.1:5501/JS%20practice%20projects/faq%20accordion%20form/images/icon-plus.svg") {
        icon.style.animation = "rotate-front 0.5s ease-out forwards"
        setTimeout(() => {
        icon.src = "images/icon-minus.svg"
    }, 300);
    } else if(icon.src == "http://127.0.0.1:5501/JS%20practice%20projects/faq%20accordion%20form/images/icon-minus.svg") {
        icon.style.animation = "rotate-back 0.5s ease-out forwards"
        setTimeout(() => {
            icon.src = "images/icon-plus.svg"
        }, 300)
    }
}

function displayAnswers(answer) {
    if(answer.style.display == "") {
        answer.style.display = "block";
        answer.style.animation = "slide-down 0.5s ease-in forwards"
    } else if(answer.style.display == "block") {
        setTimeout(() => {
            answer.style.display = "";
        }, 400)
        answer.style.animation = "slide-up 0.5s ease-out forwards"
    }
}





