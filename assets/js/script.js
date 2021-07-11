// Creates an array of intergers between two numbers
function interval(j, k) { 
    var targetLength = (k - j) + 1;
    var a = Array(targetLength);
    var b = Array.apply(null, a);
    var c = b.map(function(_, n){ return n + j; });
    return c;
}

// Stores all the ASCII codes that represent each desired character set
var lowerCharCodes = interval(65,90);
var upperCharCodes = interval(97,122);
var numericCharCodes = interval(48,57);
var specialCharCodes = interval(33,47).concat(
  interval(58,64)).concat(
  interval(91,96)).concat(
  interval(122,126));


//Generates password
function generatePassword(){
  
  //Default character code
  var characterCode = lowerCharCodes;

  //User password criteria
  var characterLenght = window.prompt("Enter the password lenght from 8 to 128", "8-128");

  var includeLowerCase = window.confirm("Include lowercase characters?");
  if (includeLowerCase) {
    characterCode = characterCode;
  };

  var includeUpperCase = window.confirm("Include uppercase characters?");
  if (includeUpperCase) {
    characterCode = characterCode.concat(upperCharCodes);
  };

  var includeNumeric = window.confirm("Include numeric characters?");
  if (includeNumeric) {
    characterCode = characterCode.concat(numericCharCodes);
  };
  var includeSpecial = window.confirm("Include special characters?");
  if (includeSpecial) {
    characterCode = characterCode.concat(specialCharCodes);
  };
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
