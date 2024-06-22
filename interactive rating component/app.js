const ratingCard = document.querySelector('.rating-state');
const thankCard = document.querySelector('.thank-state');
const ratingButtons = document.querySelectorAll('.rating');
const submitButton = document.querySelector('.button');
const selectedRating = document.querySelector('.selected-rating');

let selected;

ratingButtons.forEach(rating => {
    rating.addEventListener('click', () => {
        for(let i = 0; i < ratingButtons.length; i++) {
            ratingButtons[i].classList.remove('orange');
        }
        rating.classList.add('orange');
        selected = rating.innerText;
        submit(rating)
    })

    rating.addEventListener('keydown', (key) => {
        if(key.key == "Enter") {
            for(let i = 0; i < ratingButtons.length; i++) {
                ratingButtons[i].classList.remove('orange');
            }
            rating.classList.add('orange');
            selected = rating.innerText;
            submit(rating)
        }   
    })
})

function submit(rating) {
    submitButton.addEventListener('click', () => {
        selectedRating.innerText = `${rating.innerText}`;
        ratingCard.style.display = 'none';
        thankCard.style.display = 'flex';
    })
    
    submitButton.addEventListener('keydown', (key) => {
        if(key.key == 'Enter') {
            selectedRating.innerText = `${rating.innerText}`;
            ratingCard.style.display = 'none';
            thankCard.style.display = 'flex';
        }
    })
}
