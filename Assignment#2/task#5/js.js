var secretNum = 7;
var guessNumb = prompt("Guess the secret number!");
if(guessNumb == secretNum) {
    alert("Bingo! Correct answer.");
}
else if((parseInt(guessNumb) + 1) == secretNum) {
    alert("Close enough to the correct answer.");
}
else {
    alert("Wrong guess! Better luck next time.");
}