// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '/', '<', '>', '?'];





function generatePassword() {
  var password = '';
  var characterSet = [];
  var passwordLength = +prompt('Please provide a password length');

  var wantsLowercase = confirm('Click OK if you want Lowercase letters');
  var wantsUppercase = confirm('Click OK if you want Uppercase letters');
  var wantsNumbers = confirm('Click OK if you want Numbers');
  var wantsspecialCharacters = confirm('Click OK if you want Special Characters');

  // console.log(wantsLowercase)
  // console.log(wantsUppercase)
  // console.log(wantsNumbers)
  // console.log(wantsspecialCharacters)

  if (wantsLowercase) {
    characterSet = characterSet.concat(lowercase)
  }

  if (wantsUppercase) {
    characterSet = characterSet.concat(uppercaseLetters)
  }

  if (wantsNumbers) {
    characterSet = characterSet.concat(numbers);
  }

  if (wantsspecialCharacters) {
    characterSet = characterSet.concat(specialCharacters);
  }

  // console.log(characterSet);


  for (var count = 0; count < passwordLength; count++) {
    var ranIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[ranIndex];
  }

  return password;

}

// var pass = generatePassword();

// console.log(pass);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
