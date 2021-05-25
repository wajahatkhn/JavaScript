var x = [10,20,4,40,60,70];
var y = [1,2,3,4,5,6,7,8,9,10];
var z = [...new Set([...y, ...x])];
document.write("<b>Output: </b>" + z)