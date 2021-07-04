var html = "<a><strong><em>Only print this</em></strong></p>";
document.write("<p style='font-size:25px;'>" + "Given String:" + "<br>");
document.write(html + "<br>");
document.write("<a style='font-size:25px;'>" + "Output:" + "<br>");
function stripHtml()
{
   let tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}
document.write("<a style='font-size:25px;'>" + stripHtml(html));