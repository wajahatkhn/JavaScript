var date = new Date();
alert(date);
var day = date.getDate();
if(day <= 15)
{
   document.write("<p style='font-size:25px;'>" + "First fifteen days of the month." + "<br>");
}
else
{
   document.write("<p style='font-size:25px;'>" + "Last fifteen days of the month." + "<br>");
}