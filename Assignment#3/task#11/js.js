var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var order = prompt("Welcome to BoomBoom Bakery. What would you like to order?");
var found = false;
for(var i = 0; i < A.length; i++) {
    if(A[i] === order) {
        alert(order + " is available at index " + i + " in our bakery.");
        found = true;
    }
}
if(found === false) {
    alert("We are sorry, " + order + " is not available in our bakery.");
}