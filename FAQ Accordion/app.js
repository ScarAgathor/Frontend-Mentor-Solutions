const faqQuestions = document.querySelectorAll(".faq-question");
const icons = document.querySelectorAll('.icon');

let icon;
let answer;


faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        icon = question.lastElementChild
        answer = question.nextElementSibling;
        if(question.dataset.status == "closed") {
            showAnswer(question, answer)
        } else if(question.dataset.status == "opened") {
            hideAnswer(question, answer)
        }
    })   
    
    question.addEventListener("keydown", (key) => {
        if(key.key == "Enter") {
            icon = question.lastElementChild
            answer = question.nextElementSibling;
            if(question.dataset.status == "closed") {
                showAnswer(question, answer)
            } else if(question.dataset.status == "opened") {
                hideAnswer(question, answer)
            }
        } 
    })
})

function showAnswer(question, answer) {
    question.dataset.status = 'opened';
    answer.style.height = `${answer.scrollHeight}px`;
    icon.style.animation = "rotate-front 0.5s ease-out forwards"
        setTimeout(() => {
        icon.src = "images/icon-minus.svg"
    }, 300);
}

function hideAnswer(question, answer) {
    question.dataset.status = 'closed';
    answer.style.height = `0px`;
    icon.style.animation = "rotate-back 0.5s ease-out forwards"
        setTimeout(() => {
            icon.src = "images/icon-plus.svg"
        }, 300)
}
