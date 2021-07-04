var strng = "The quick brown fox jumps over the lazy dog.";
var strng1 = strng.toLowerCase();
var count = (strng1.match(/the/g) || []).length;
document.write("<p style='font-size:25px;'>" + "Text: " + strng + "<br>");
document.write("There are " + count + " occurrence(s) of the word 'the'.");