function goToSecondPage(){
    //Get the card number and keep it
    const numberHtmlElement = document.getElementById ('card-number');
    const creditCardNumber = numberHtmlElement.value;

    //Ask users to enter a card number in case they did not
    if (creditCardNumber=='') {
    alert('Debes ingresar el número de tu tarjeta de crédito');
    }

      // Hide the first page
    const firstPage = document.getElementById('first-page');
    firstPage.style.display = 'none'

    // Show the second page
    const secondPage = document.getElementById('second-page');
    secondPage.style.display = 'block'
}


import validator from './validator.js';

console.log(validator);







