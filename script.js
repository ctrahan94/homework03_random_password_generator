// Global variables
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
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
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

//Function that asks the user how many characters they want and the type of characters they want
function getPasswordOptions() {
  var chosenLength = prompt(
    "How many characters do you want your password to be?"
  );
  
  // While loop that will loop if they enter a length that is less than 8 or more than 128
  while (chosenLength < 8 || chosenLength > 128) {
    if (chosenLength < 8 || chosenLength > 128) {
      alert("Must be at least 8 characters and have no more than 128.");
    }
    chosenLength = prompt(
      "How many characters do you want your password to be?"
    );
  }
  pwLength = chosenLength;
  var hasSpecialChar = confirm("Do you want special characters?");
  var hasNumericChar = confirm("Do you want numbers?");
  var hasUpperLetter = confirm("Do you want uppercase letters?");
  var hasLowerLetter = confirm("Do you want lowercase letter?");

  //This if statement is if they select no for all of the password criteria then it will alert that they //must choose at least one option and then they they have to select the generate password button all 
  //over again
  if (
    hasSpecialChar === false &&
    hasNumericChar === false &&
    hasUpperLetter === false &&
    hasLowerLetter === false
  ) {
    alert("You must choose at least one option.");
    return;
  }

  // This object contains the length of the password and if each variable has a value of true or false 
  //based on the user selection
  var passwordOptions = {
    chosenLength: chosenLength,
    hasSpecialChar: hasSpecialChar,
    hasNumericChar: hasNumericChar,
    hasUpperLetter: hasUpperLetter,
    hasLowerLetter: hasLowerLetter,
  };
  return passwordOptions;
}

// This function selects a random variable from the array that we will push through the getRandom 
//function
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var result = arr[randIndex];
  return result;
}

//This function is what will generate the password
function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleChars = [];
  var guaranteedChars = [];

  while (guaranteedChars.length < options.chosenLength) {
    if (options.hasSpecialChar) {
      possibleChars = possibleChars.concat(specialChar);
      if (guaranteedChars.length < options.chosenLength) {
        guaranteedChars.push(getRandom(specialChar));
      }
    }

    if (options.hasNumericChar) {
      possibleChars = possibleChars.concat(numbers);
      if (guaranteedChars.length < options.chosenLength) {
        guaranteedChars.push(getRandom(numbers));
      }
    }
    if (options.hasUpperLetter) {
      possibleChars = possibleChars.concat(upLetter);
      if (guaranteedChars.length < options.chosenLength) {
        guaranteedChars.push(getRandom(upLetter));
      }
    }
    if (options.hasLowerLetter) {
      possibleChars = possibleChars.concat(lowLetter);
      if (guaranteedChars.length < options.chosenLength) {
        guaranteedChars.push(getRandom(lowLetter));
      }
    }
    // console.log(guaranteedChars);
  }

  //This chooses a random variable from the possibleChars array
  for (var i = 0; i < options.chosenLength; i++) {
    result.push(getRandom(possibleChars));
  }
  //This ensures that you will get at least one of the chosen characters (taken from the guaranteedChars
  //array)
  for(var i =0; i < guaranteedChars.length; i++){
    result[i] = guaranteedChars[i];
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
