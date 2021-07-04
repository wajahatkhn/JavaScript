var pastDate = new Date();
var realDate = new Date();
var hour = pastDate.getHours();
var hPast = hour - 1;
var pDate = pastDate.setHours(hPast);
document.write("<p style='font-size:25px;'>Current Date: " + realDate);
document.write("<br><p style='font-size:25px;'>Current Date: " + pastDate);