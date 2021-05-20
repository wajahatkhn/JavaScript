var timeChk = prompt("Enter your current time in 24hrs format. ie(0600, 1700 or 2400).");
timeChk = parseInt(timeChk);
if(timeChk >= 0600 && timeChk <= 1159) {
    alert("Good Morning!");
}
else if(timeChk >= 1200 && timeChk <= 1659) {
    alert("Good Afternoon!");
}
else if(timeChk >= 1700 && timeChk <= 2059) {
    alert("Good Evening!");
}
else if(timeChk >= 2100 && timeChk <= 2359) {
    alert("Good Night!");
}
else if(timeChk >= 0000 && timeChk <= 0500) {
    alert("It's midnight! Go to sleep for god's sake!");
}
else if(timeChk >= 0501 && timeChk < 0600) {
    alert("Well it's almost morning, so it's to just wake up");
}
else {
    alert("Please enter the time in the correct format.");
}