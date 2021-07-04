var age = prompt("What is your age?");
var date = new Date();
var birthYear = date.getFullYear() - age;
document.write("<p style='font-size:25px;'>Your age is " + age);
document.write("<br><p style='font-size:25px;'>Your birth year is " + birthYear);