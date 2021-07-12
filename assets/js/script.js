// Variables that store the different character strings
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "0123456789";
var specialCharacters = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";

// Generates password
function generatePassword (){
  // Characters dertermined by user criteria
  var characters = "";

  // User password criteria

  // Prompt for password length until user inputs from 8-128
   do {
     var length = parseInt(window.prompt("Enter the password lenght from 8 to 128", ""), 12);
   }while(isNaN(length) || length > 128 || length < 8);

  // Prompt to include lowercase characters
  var includeLowerCase = window.confirm("Include lowercase characters?");
  if (includeLowerCase) {
    characters = characters.concat(lowerCharacters);
  };

  // Prompt to include uppercase characters
  var includeUpperCase = window.confirm("Include uppercase characters?");
  if (includeUpperCase) {
    characters = characters.concat(upperCharacters);
  };

  // Prompt to include numeric characters
  var includeNumeric = window.confirm("Include numeric characters?");
  if (includeNumeric) {
    characters = characters.concat(numericCharacters);
  };

  // Prompt to include special characters
  var includeSpecial = window.confirm("Include special characters?");
  if (includeSpecial) {
    characters = characters.concat(specialCharacters);
  };

  //Randomizes characters considering user criteria
  var passwordCharacters = [];
  var n = characters.length;
  for (let i = 0; i < length; i++) {
    passwordCharacters.push(characters[Math.floor(Math.random() * n)])
  }
  return passwordCharacters.join("");
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
