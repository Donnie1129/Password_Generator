var generateBtn = document.querySelector("#generate");
const UPPERCASE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE_CHAR = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "`~!@#$%^&*()-_=+[{]};:,<.>/?+-*/|";

function createPassword() {
  var finalPassword = ""
  var password_length = prompt("Pick a length between '8' and '128'");
    if (password_length < 8 || password_length > 128 || password_length === NUMBERS) {
      return "Invalid Entry";
    }

  var upper = confirm("uppercase?");
  var lower = confirm("lower case?");
  var numbers = confirm("include numbers?");
  var special_characters = confirm("special characters?");

  var passwordCriteria = ""
  if (upper == true){
    passwordCriteria += UPPERCASE_CHAR;
  }
  if (lower == true){
    passwordCriteria += LOWERCASE_CHAR;
  }
  if (numbers == true){
    passwordCriteria += NUMBERS;
  }
  if (special_characters == true){
    passwordCriteria += SYMBOLS;
  }

   for (let i = 0; i < password_length; i++){
    var randomDecimal = Math.random();
    var randomDecimalIndex = randomDecimal * passwordCriteria.length;
    var randomIndex = Math.floor(randomDecimalIndex);
    var randomChar = passwordCriteria[randomIndex];
      finalPassword += randomChar;
  console.log(finalPassword)
  } return finalPassword;
}
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);