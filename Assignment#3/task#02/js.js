var studNames = ["Ali", "Kashif", "Umar"];
var studScores = [333, 444, 222];
var totalMks = 500;
for(i = 0; i < studNames.length; i++) {
    var percentage = (studScores[i] / totalMks * 100) + "%";
    document.write("Score of " + studNames[i] + " is " + studScores[i] + ". Percentage: " + percentage + "<br>"); 
}