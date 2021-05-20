var vowelCheck = prompt("Vowel Check! Enter a letter.");
vowelCheck = vowelCheck.toUpperCase();
if(vowelCheck == "A" || vowelCheck == "E" || vowelCheck == "I" || vowelCheck == "O" || vowelCheck == "U") {
    alert("Yup! That's a Vowel.");
}
else if( vowelCheck.length > 1) {
    alert("Just enter a single letter, no more.");
}
else if(vowelCheck.length == 0) {
    alert("Atleast enter something...");
}
else {
    alert("Nope! Not a Vowel.");
}