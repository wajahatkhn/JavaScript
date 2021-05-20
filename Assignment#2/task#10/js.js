var pwd = "Crackhead";
var pwdCheck = prompt("Enter your password!");
if(pwd === pwdCheck) {
    alert("Correct! The password you entered matches the original password.");
}
else if(pwdCheck.length == 0) {
    alert("Please enter your password.");
}
else {
    alert("Incorrect password!");
}