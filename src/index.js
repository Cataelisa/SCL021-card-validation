
import validator from './validator.js';

function showNumber(cardNumber){
    // show card number on divs
    let hiddenNumberHtmlElement = document.getElementById ('hidden-card-number');
    hiddenNumberHtmlElement.innerHTML = validator.maskify(cardNumber)
    }

function goToSecondPage(){ 
  
    //Get the card number and keep it
    let numberHtmlElement = document.getElementById ('card-number');
    let creditCardNumber = numberHtmlElement.value;

    //Ask users to enter a card number in case they did not
    if (creditCardNumber == '') {
    alert ('Debes ingresar el número de tu tarjeta de crédito');
    return
    }

      // Hide the first page
    let firstPage = document.getElementById('first-page');
    firstPage.style.display = 'none'

    // Show the second page
    let secondPage = document.getElementById('second-page');
    secondPage.style.display = 'block'

    showNumber(creditCardNumber)
}
//ONCLICK
let buttonValidate = document.getElementById('button');
console.log(buttonValidate)

buttonValidate.addEventListener('click', goToSecondPage);

console.log(validator);







