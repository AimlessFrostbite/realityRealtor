const income = document.querySelector('.income');
const calculate = document.querySelector('.calculate');
const budgetDisplay = document.querySelector('.bDisplay');
const section = document.querySelector('.gallery-section');


//find a house button effect
calculate.addEventListener('click', display => {
    budgetDisplay.textContent = '$' + budget();
    section.classList.remove('budget');
});

function budget() {
 const payment = ((income.value * .25)*12)*15;
 return payment;
}

//image gallery functions
function imageGallery() {
    const highlight = document.querySelector('.gallery-highlight');
    const previews = document.querySelectorAll('.house-preview img');

    previews.forEach(preview =>{
        preview.addEventListener('click', function() {
            const smallSrc = this.src;
            const bigSrc = smallSrc.replace('small', 'big');
            highlight.src = bigSrc;
            previews.forEach(preview => preview.classList.remove('house-active'));
            preview.classList.add('house-active');
        });
    });
}

imageGallery();