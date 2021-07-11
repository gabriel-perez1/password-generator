// Creates an array of intergers between two numbers
function interval(j, k) { 
    var targetLength = (k - j) + 1;
    var a = Array(targetLength);
    var b = Array.apply(null, a);
    var c = b.map(function(_, n){ return n + j; });
    return c;
}

// Stores the set of ASCII codes that represent the desired character sets
var lowerCharCodes = interval(65,90);
var upperCharCodes = interval(97,122);
var numericalCharCodes = interval(48,57);
var specialCharCodes = interval(33,47).concat(
  interval(58,64)).concat(
  interval(91,96)).concat(
  interval(122,126));

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
