var email = prompt("Enter your email!");
var exp = /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
if(exp.test(email) === true ) {
alert("Email is valid!");
}
else {
    alert("Email is invalid!");
}