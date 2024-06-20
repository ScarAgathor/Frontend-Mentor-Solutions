const img = document.querySelectorAll('.criteria-img');
const categories = document.querySelectorAll('.category');
const scores = document.querySelectorAll('.score');
const result = document.querySelector('.result');

let file = 'data.json'
fetch(file)
    .then(response => response.json())
    .then(data => {
        let num = 0;
        for(let i = 0; i < 4; i++) {
            categories[i].textContent = data[i].category
            scores[i].textContent = data[i].score
            img[i].src = data[i].icon
            num += data[i].score;
        }

        result.textContent = Math.round(num/4);
    })