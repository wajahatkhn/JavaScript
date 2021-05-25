var signal = prompt("What is the signal color right now?");
signal = signal.toLowerCase();
if(signal == "red") {
    alert("Must Stop");
}
else if(signal == "yellow") {
    alert("Ready To Move");
}
else if(signal == "green") {
    alert("Move Now");
}
else {
    alert("Wrong color!");
}