var arr1 = [5, 4, 3, 2, 1, 0];
var arr2 = [555, 444, 333, 222, 111];
function mirror(arr)
{
    return arr.reverse();
}
document.write("<a style=color:blue;font-size:25px;>" + "mirror([" + arr1 + "])</a>"+ " →" + "<a style=color:red;font-size:25px;>" + "[" +mirror(arr1) + "]" + "</a>" + "<br>");
document.write("<a style=color:blue;font-size:25px;>" + "mirror([" + arr2 + "])</a>"+ " →" + "<a style=color:red;font-size:25px;>" + "[" +mirror(arr2) + "]" + "</a>" + "<br>");