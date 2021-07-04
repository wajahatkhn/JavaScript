// Maths Operations in JavaScript
var s = 10;
var i = -1000;
var f = 230.47;
var d = 200.374;
var sin45 = Math.sin((45 * 3.14159) / 180);
var cos45 = Math.cos((45 * 3.14159) / 180);
var tan45 = Math.tan((45 * 3.14159) / 180);
var log = Math.log(s);
var pow = Math.pow(d, 2);
var hypot = Math.hypot(s, s);
var sqrt = Math.sqrt(f);
var abs = Math.abs(i);
var floor = Math.floor(d);
var ceil = Math.ceil(d);
document.write("<h1>" + "Math Operations in JavaScript" + "</h1>");
document.write("<br>");
document.write("<pre>" + "<a style=color:blue;>" + "short  s    : " + "</a>" + "<a style=color:red;>"  + s + "</a>");
document.write("<br>");
document.write("<a style=color:blue;>" + "int    i    : " + "</a>"  + "<a style=color:red;>" + i + "</a>");
document.write("<br>");
document.write("<a style=color:blue;>" + "float  f    : " + "</a>"  + "<a style=color:red;>" + f + "</a>");
document.write("<br>");
document.write("<a style=color:blue;>" + "double d    : " + "</a>"  + "<a style=color:red;>" + d + "</a>");
document.write("<br>");
document.write("<br>");
document.write("<a style=color:blue;>" + "sin   (45)  : " + "</a>"  + "<a style=color:red;>" + sin45 + "<br>" + "</a>");
document.write("<a style=color:blue;>" + "cos   (45)  : " + "</a>"  + "<a style=color:red;>" + cos45 + "<br>" + "</a>");
document.write("<a style=color:blue;>" + "tan   (45)  : " + "</a>"  + "<a style=color:red;>" + tan45 + "<br>" + "</a>");
document.write("<a style=color:blue;>" + "log   (s)   : " + "</a>"  + "<a style=color:red;>" + log + "<br>" + "</a>");
document.write("<a style=color:blue;>" + "pow   (d,2) : " + "</a>"  + "<a style=color:red;>" + pow + "<br>" + "</a>");
document.write("<a style=color:blue;>" + "hypot (s,s) : " + "</a>"  + "<a style=color:red;>" + hypot + "<br>" + "</a>");
document.write("<a style=color:blue;>" + "sqrt  (f)   : " + "</a>"  + "<a style=color:red;>" + sqrt + "<br>" + "</a>");
document.write("<a style=color:blue;>" + "abs   (i)   : " + "</a>"  + "<a style=color:red;>" + abs + "<br>" + "</a>");
document.write("<a style=color:blue;>" + "floor (d)   : " + "</a>"  + "<a style=color:red;>" + floor + "<br>" + "</a>");
document.write("<a style=color:blue;>" + "ceil  (d)   : " + "</a>"  + "<a style=color:red;>" + ceil + "<br>" + "</a>" +"</pre>");