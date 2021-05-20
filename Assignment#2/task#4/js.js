var astronomy = prompt("How much marks did you gain in astronomy?");
astronomy = parseInt(astronomy);
var maths = prompt("How much marks did you gain in maths?");
maths = parseInt(maths);
var physics = prompt("How much marks did you gain in physics?");
physics = parseInt(physics);
var totalMarks = 300;
var marksObtained = astronomy + maths + physics;
alert("Your total marks obtained are " + marksObtained + ".");
var percentage = marksObtained / totalMarks * 100;
alert("Your total percentage is " + percentage + "%" + ".");
var grade;
var remarks;
if(percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent!";
    alert("Your grade is " + grade + ".");
    alert(remarks);
}
else if(percentage >= 70) {
    grade = "A";
    remarks = "Good!";
    alert("Your grade is " + grade + ".");
    alert(remarks);
}
else if(percentage >= 60) {
    grade = "B";
    remarks = "You need to improve!";
    alert("Your grade is " + grade + ".");
    alert(remarks);
}
else {
    grade = "Failed";
    remarks = "Sorry!";
    alert("Your grade is " + grade + ".");
    alert(remarks);
}
document.write("<h1>" + "Marks Sheet" + "</h1>");
document.write("<br>");
document.write("<p>" + "Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%" + "<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "</p>");