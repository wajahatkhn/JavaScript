var w = prompt("Enter the width of the rectangle!");
var h = prompt("Enter the height of the rectangle!");
var w1 = parseInt(w);
var h1 = parseInt(h);
function areaR(n1, n2)
{
    return n1 * n2;
}
document.write("<a style=color:blue;font-size:25px;>" + "Area of rectangle is " + "<a style=color:red;font-size:25px;>" + areaR(w1, h1) + "</a>" + "<br>");