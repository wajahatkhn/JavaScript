var count = [];
var rCount = [];
var even = [];
var odd = [];
var series = [];
for(i = 1; i <= 15; i++) {
    count.push(i);
}
for(i = 15; i >= 1; i--) {
    rCount.push(i);
}
for(i = 0; i <= 20; i++) {
    if((i % 2 === 0)) {
        even.push(i);
    }
}
for(i = 0; i <= 20; i++) {
    if((i % 2 != 0)) {
        odd.push(i);
    }
}
for(i = 1; i <= 20; i++) {
    if((i % 2 === 0)) {
        series.push(i + "k");
    }
}
document.write("a. Counting: " + count + "<br>")
document.write("b. Reverse counting: " + rCount + "<br>")
document.write("c. Even: " + even + "<br>")
document.write("d. Odd: " + odd + "<br>")
document.write("e. Series: " + series + "<br>")