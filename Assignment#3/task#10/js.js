var numArray = [20,53,78,4,91,12];
var A = [20,53,78,4,91,12];
var sortedNumArr = numArray.sort(function(a, b) {
  return a - b;
});
document.write("<b>A: </b>" + "[" + A + "]" + "<br>");
document.write("<b>Sorted Form: </b>" + "[" + sortedNumArr + "]");