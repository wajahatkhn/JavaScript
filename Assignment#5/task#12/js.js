var rndm = Math.random();
var num1 = rndm * 100;
var num2 = num1 + 1;
var numb = Math.floor(num2);
var guess;
var gs;
var i = 0;
alert("Time to play a guessing game!");
alert("All you have to do is, guess a number between 1 and 100.");
alert("Don't Worry! You'll get three chances!");
alert("Seems fair?");
alert("Alrighty then!");

function game()
{
    do
{
    guess = prompt("Guess the number");
    gs = parseInt(guess);
    i++;
    if(gs === numb)
    {
        alert("Wow! You guessed right.");
    }
    else if(i === 3)
    {
        alert("You Lose!");
    }
    else
    {
        alert("Incorrect, Please try again");
    }
}
while(i < 3);
}
game();
alert("That was a fun game, right?");
do
{
    var tryAg = prompt("Wanna play again?(Yes/No)")
    var tryAgg = tryAg.toLowerCase();
    if(tryAgg === "yes")
    {
        i = 0;
        game();
    }
    else if(tryAgg === "no")
    {
        alert("Thank you for playing with use today!");
        break;
    }
}
while(i > 3);