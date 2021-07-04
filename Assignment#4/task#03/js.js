const pattern = /^[0-9a-zA-Z]+$/;
const patternTwo = /^[0-9]+$/;

let userInput;

do {
  userInput = prompt("Please Enter valid password");
} while (!pattern.test(userInput) || userInput.length < 8 || patternTwo.test(userInput[0]));

alert('Correct password');