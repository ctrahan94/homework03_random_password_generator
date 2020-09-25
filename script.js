var specialChar = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "[",
  "]",
  "{",
  "}",
  ";",
  ":",
  "<",
  ">",
  "?",
  "/",
  ",",
  ".",
];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var upLetter = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowLetter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var pwLength = 0;

// function getRandomInt(max){
//   return Math.floor(Math.Random() * Math.floor(max));
// }

function getPasswordOptions() {
  var pWordLength = prompt(
    "How many characters do you want your password to be?"
  );
  while (pWordLength < 8 || pWordLength > 128) {
    if (pWordLength < 8 || pWordLength > 128) {
      alert("Must be at least 8 characters and have no more than 128.");
    }
    pWordLength = prompt(
      "How many characters do you want your password to be?"
    );
  }
  pwLength = pWordLength;
  var hasSpecialChar = confirm("Do you want special characters?");
  var hasNumericChar = confirm("Do you want numbers?");
  var hasUpperLetter = confirm("Do you want uppercase letters?");
  var hasLowerLetter = confirm("Do you want lowercase letter?");

  if (
    hasSpecialChar === false &&
    hasNumericChar === false &&
    hasUpperLetter === false &&
    hasLowerLetter === false
  ) {
    alert("You must choose at least one option.");
    return;
  }

  var passwordOptions = {
    pWordlength: pWordLength,
    hasSpecialChar: hasSpecialChar,
    hasNumericChar: hasNumericChar,
    hasUpperLetter: hasUpperLetter,
    hasLowerLetter: hasLowerLetter,
  };
  return passwordOptions;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var result = arr[randIndex];
  return result;
}

function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleChars = [];
  var guaranteedChars = [];

  while (guaranteedChars.length < options.pWordlength) {
    if (options.hasSpecialChar) {
      possibleChars = possibleChars.concat(specialChar);
      if (guaranteedChars.length < options.pWordlength) {
        guaranteedChars.push(getRandom(possibleChars));
      }
    }

    if (options.hasNumericChar) {
      possibleChars = possibleChars.concat(numbers);
      if (guaranteedChars.length < options.pWordlength) {
        guaranteedChars.push(getRandom(possibleChars));
      }
    }
    if (options.hasUpperLetter) {
      possibleChars = possibleChars.concat(upLetter);
      if (guaranteedChars.length < options.pWordlength) {
        guaranteedChars.push(getRandom(possibleChars));
      }
    }
    if (options.hasLowerLetter) {
      possibleChars = possibleChars.concat(lowLetter);
      if (guaranteedChars.length < options.pWordlength) {
        guaranteedChars.push(getRandom(possibleChars));
      }
    }
  }

  for (var i = 0; i < options.pWordlength; i++) {
    result.push(getRandom(possibleChars));
  }

  return result.join("");
}

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
