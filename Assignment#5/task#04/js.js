// The Geometrizer
var radius = prompt("Enter the radius of a circle!");
var r = parseInt(radius);
function calcCircumference(r)
{
    c = 2 * (3.14) * r;
    document.write("<a style=color:blue;font-size:25px;>" + "The circumference is " + "<a style=color:red;font-size:25px;>" + c + "</a>" + "<br>");
}
function calcArea(r)
{
    a = (3.14) * (r * r);
    document.write("<a style=color:blue;font-size:25px;>" + "The area is " + "<a style=color:red;font-size:25px;>" + a + "</a>" + "<br>");
}
calcCircumference(r);
calcArea(r);