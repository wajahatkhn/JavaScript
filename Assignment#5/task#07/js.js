var today = new Date();
var check = prompt("Wanna check if today is a weekend or not? answer in (yes, no)!");
function weekendChk()
{
    if(today.getDay() == 6 || today.getDay() == 0)
    {
        alert("Congratulations! Today's a weekend.");
    }
    else 
    {
        alert("Sorry! Wait for " + (6 - today.getDay()) + " more days." )
    }
}
var chk = check.toLowerCase();
if(chk == "yes")
{
    weekendChk();
}