var testDate = new Date();
document.write("<a style=color:blue;font-size:25px;>" + "Current Date = </a>" + "<a style=color:red;font-size:25px;>" + testDate + "</a>" + "<br>");
var n;
function addWeek(n)
{
    testDate.setDate(testDate.getDate() + (7 * n));
    return testDate;
}
document.write("<a style=color:blue;font-size:25px;>" + "addWeek(4) = " + "</a>"+ "<a style=color:red;font-size:25px;>" + addWeek(4) + "</a>" + "<br>");
document.write("<a style=color:blue;font-size:25px;>" + "addWeek(7) = " + "</a>" + "<a style=color:red;font-size:25px;>" + addWeek(7) + "</a>" + "<br>");