var amount = prompt("Enter the amount you want to withdraw!");
amount = parseInt(amount);
function denom100(n)
{
    return Math.floor(n / 100);
}
function denom50(n)
{
    return Math.floor((n % 100) / 50);
}
function denom10(n)
{
    return Math.floor(((n % 100) % 50) / 10);
}
function change(n)
{
    return (((n % 100) % 50) % 10);
}
document.write("<a style=color:blue;font-size:25px;>" + "You will have " + "<a style=color:red;font-size:25px;>" + denom100(amount) + "</a>" + "<a style=color:blue;font-size:25px;>" + " hundred notes, " + "<a style=color:red;font-size:25px;>" + denom50(amount) + "</a>" + "<a style=color:blue;font-size:25px;>" + " fifty notes, "  + "<a style=color:red;font-size:25px;>" + denom10(amount) + "<a style=color:blue;font-size:25px;>" + " ten notes and " + "<a style=color:red;font-size:25px;>" + change(amount) + "<a style=color:blue;font-size:25px;>" + " in change." +"<br>");