const validator = {

// To get the credit card number (input) and validate it
isValid: function (creditCardNumber){


  let toBeValidated = creditCardNumber.split("");
  let lunhNumber = toBeValidated.reverse();
  let arrayAddition = 0;
  let oddAddition = 0;
  let evenAddition = 0;
  let totalAddition = 0;

  for (let i =0; i < lunhNumber.length; i++) {
    //It looks for the odd positions and multiplies those numbers by two
    if (i % 2 === 1) {
      evenAddition = lunhNumber[i] * 2; 
      if (evenAddition >= 10) {
        //become a string and it splits
        arrayAddition = evenAddition.toString().split("")
        //Number are added to become only one digit
        lunhNumber[i] = parseInt(arrayAddition[0]) + parseInt(arrayAddition[1])
      } else {
        //Update the numbers 
        lunhNumber[i] = evenAddition;
      }
      totalAddition = parseInt(totalAddition) + parseInt(lunhNumber[i]);
    } else {
      oddAddition = parseInt(oddAddition) + parseInt(lunhNumber[i])
      }
  }

  // odd and even numbers are added
  totalAddition = totalAddition + oddAddition;
  if (totalAddition % 10 == 0){
    return true
  }
  else{
    return false
  }
},


// To hide the first 12 credit card numbers//
maskify:  function (cardNumber){
  let maskedNumber = cardNumber.length;
  let masked = "";
  for (let i = 0; i < maskedNumber - 4; i++) {masked += "#";
  }
  let maskedSection = masked + cardNumber.substring(maskedNumber - 4, maskedNumber);
  return maskedSection
  }

};

 
export default validator;
