var qualifs = [];
qualifs.push("SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD");
document.write("<h1>" +  "Qualifications:" + "</h1>");
document.write("<br>");
for(var i = 0; i < qualifs.length; i++) {
    document.write(i + 1 + ") " + qualifs[i] + "<br>");
}