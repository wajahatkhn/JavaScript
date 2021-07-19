var num1 = prompt("Enter the 1st number!");
var num2 = prompt("Enter the 2nd number!");
var num3 = prompt("Enter the 3rd number!");
var n1 = parseInt(num1);
var n2 = parseInt(num2);
var n3 = parseInt(num3);
function factorial(n)
{
    if(n <= 1)
    {
        return 1;
    }
    else
    {
        return n * factorial(n -1);
    }
}
document.write("<a style=color:blue;font-size:25px;>" + "factorial("+ n1 + ") " + "</a>" + "→" + "<a style=color:red;font-size:25px;>" + factorial(n1) + "</a>" + "<br>");
document.write("<a style=color:blue;font-size:25px;>" + "factorial("+ n2 + ") " + "</a>" + "→" + "<a style=color:red;font-size:25px;>" + factorial(n2) + "</a>" + "<br>");
document.write("<a style=color:blue;font-size:25px;>" + "factorial("+ n3 + ") " + "</a>" + "→" + "<a style=color:red;font-size:25px;>" + factorial(n3) + "</a>" + "<br>");