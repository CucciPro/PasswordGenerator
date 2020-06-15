// Assignment code here
function generatePassword() {  
  
  // prompt for length
  var input = window.prompt("Password length: (8 - 128 characters)");

  input = parseInt(input);

  var finalPwd = "";

  // input check
  if (Number.isInteger(input) && input >= 8 && input <= 128)  {
    var pwdLength = input;
  } else if (!Number.isInteger(input)) {
    window.alert("Please use a number:");
    return generatePassword();
  } else if (input < 8 || input > 128){
    window.alert("Please use a number between 8 and 128:");
    return generatePassword();
  }
  
  // prompt for character types
  var lowercase = window.confirm("Would you like to include lower case characters in your password?");
  var uppercase = window.confirm("Would you like to include upper case characters in your password?");
  var numbers = window.confirm("Would you like to include numbers in your password?");
  var characters = window.confirm("Would you like to include special characters in your password?");

  charSet = "";

  if (lowercase) {
    charSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (uppercase) {
    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numbers){
    charSet += "1234567890";
  }
  if (characters){
    charSet += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }

  // character type validation
  if (!lowercase && !uppercase && !numbers && !characters) {
    window.alert("You must select at least one type of character: ");
    return generatePassword();
  }
  // generate random password
  for (i = 0; i < pwdLength; i++) {
    finalPwd += charSet[Math.floor(Math.random() * charSet.length)];
  }
  
  return finalPwd;
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
