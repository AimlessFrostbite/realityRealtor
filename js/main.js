const income = document.querySelector('.income');
const calculate = document.querySelector('.calculate');
const budgetDisplay = document.querySelector('.bDisplay');

calculate.addEventListener('click', display => {
    budgetDisplay.textContent = budget();
});

function budget() {
 const payment = ((income.value * .25)*12)*15;
 return payment;
}