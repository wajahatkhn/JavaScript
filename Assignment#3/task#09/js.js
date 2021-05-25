var arr = [24, 53, 78, 91, 12];
var largest= 0;

for ( var i = 0; i <= largest; i++){
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
document.write("<b>Array Items: </b>" + arr + "<br>");
document.write("The largest number is " + largest);