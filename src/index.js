
import validator from './validator.js';

function showNumber(cardNumber, isValid){
    // show card number on divs
if (isValid){
    let hiddenNumberHtmlElement = document.getElementById('valid-number');
    hiddenNumberHtmlElement.innerHTML = validator.maskify(cardNumber)
}
else {let hiddenNumberHtmlElement = document.getElementById('invalid-number');
     hiddenNumberHtmlElement.innerHTML = validator.maskify(cardNumber)
}
 
}

function goToSecondPage(creditCardNumber){ 
    
    // Hide the first page
    let firstPage = document.getElementById('first-page');
    firstPage.style.display = 'none'

    // Show the second page
    let secondPage = document.getElementById('second-page');
    secondPage.style.display = 'block'

    showNumber(creditCardNumber,true) 
}

function goToThirdPage(creditCardNumber){

    // Hide the first page
    let firstPage = document.getElementById('first-page');
    firstPage.style.display = 'none'

    // Show the third page
    let thirdPage = document.getElementById('third-page');
    thirdPage.style.display = 'block'

    showNumber(creditCardNumber, false)
}

function response(){
    //bring the value of validator function
    let creaditCardNumber = document.getElementById('card-number');
    let cardNumberValue = creaditCardNumber.value

    //if the card is valid, send the user to the second page
    if (validator.isValid(cardNumberValue)){
        goToSecondPage(cardNumberValue)
    } else {  //if the card is invalid, send the user to the third page 
        goToThirdPage(cardNumberValue)
        
    }
    
}

function goToFirstPage(){
       
    // Hide the third page
    let thirdPage = document.getElementById('third-page');
    thirdPage.style.display = 'none'
    // Show the first page
    let firstPage = document.getElementById('first-page');
    firstPage.style.display = 'block'
    
}

//show the user if the card number is valid or not
let buttonValidate = document.getElementById('button');
buttonValidate.addEventListener('click', response);

//go back to the first page to validate another card 
let buttonValidateAgain = document.getElementById('validate-again');
buttonValidateAgain.addEventListener('click', goToFirstPage);






