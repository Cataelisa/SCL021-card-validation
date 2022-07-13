const validator = {
  // To get the credit card number (number string) and validate it

  // To hide the first 12 credit card numbers//
  maskify:  function (creditCardNumber){
    console.log (creditCardNumber)
    return creditCardNumber.split('').map((letter, idx) => idx < creditCardNumber.lenght - 4 ? '#' : letter).join('');
    }

};




/*function maskify (creditCardNumber){
return creditCardNumber.split('').map((letter, idx) => idx < creditCardNumber.lenght - 4 ? '#': letter).join('');
} */
 
export default validator;
