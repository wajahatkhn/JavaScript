var char = prompt("Let's check if the character you enter is a vowel or not!");
var chr = char.toLowerCase();
var rslt;
function vCheck(chr)
{
    switch(chr)
{
    case "a":
        return true;
        break;
    case "e":
        return true;
        break;
    case "i":
        return true;
        break;
    case "o":
        return true;
        break;
    case "u":
        return true;
        break;
    default:
        return false;
}
}
if(vCheck(chr) === true)
{
    rslt = "Yes"
}
else
{
    rslt = "No"
}
document.write("<a style=color:blue;font-size:25px;>" + "Is '"+ chr + "'" + " a vowel? " + "</a>" + "<a style=color:red;font-size:25px;>" + rslt + "</a>" + "<br>");