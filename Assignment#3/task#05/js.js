var arr0 = [7, "x", 2, "x", "y", 7, 7, "z", "y", 2,];
document.write("<b>Initial Array: </b>" + arr0) + "<br>";
var mySet = new Set(arr0);
arr0 = [...mySet];
document.write("<br> <b>After removing duplicates: </b>" + arr0);