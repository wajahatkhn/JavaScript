var str = prompt("Write a palindrome!");
function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}
if (palindrome(str) === false)
{
    document.write("<a style=color:blue;font-size:25px;>" + "Palindrome: " + "<a style=color:red;font-size:25px;>" + palindrome(str) + "</a>" + "<br>");
}
else
{
    document.write("<a style=color:blue;font-size:25px;>" + "Palindrome: " + "<a style=color:red;font-size:25px;>" + palindrome(str) + "</a>" + "<br>");
}