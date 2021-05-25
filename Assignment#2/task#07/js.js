// CALCULATOR
alert("Hey there! It's your friendly neighbourhood calculator.");
alert("Let's calculate something, shall we?");
var fNumb = prompt("Enter the first number!");
var sNumb = prompt("Enter the second number!");
var operate = prompt("Which oneof these (+, -, *, /, %) mathematical operations would you want to perform between these two numbers?");
var equation = fNumb + operate + sNumb;
alert(fNumb + " " + operate + " " + sNumb + " " + "=" + " " + eval(equation));