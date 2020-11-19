function play(str) {

     


    if (str === "q" || str === "Q") {
        document.getElementById('display').innerText = "Work it";
     } else if (str === "w" || str === "W") {
        document.getElementById('display').innerText = "Make it";
     }
       else if (str === "e" || str === "E") {
        document.getElementById('display').innerText = "Do it";
     }
       else if (str === "a" || str === "A") {
        document.getElementById('display').innerText = "Makes us"; 
     }
     else if (str === "s" || str === "S") {
        document.getElementById('display').innerText = "Harder"; 
     }
     else if (str === "d" || str === "D") {
        document.getElementById('display').innerText = "Better";   
     }
     else if (str === "z" || str === "Z") {
        document.getElementById('display').innerText = "Faster";
     }
     else if (str === "x" || str === "X") {
        document.getElementById('display').innerText = "Stronger";
     }
    


    
    
    var audio = document.getElementById(str);
    audio.currentTime = 0;
    audio.play();
  } 

  window.document.onkeyup = function(event) { 
     let keystroke = event.key
     if (keystroke === "q" || keystroke === "Q") {
         play("Q");
     } else if (keystroke === "w" || keystroke === "W") {
         play("W");
     }
       else if (keystroke === "e" || keystroke === "E") {
         play("E");
     }
       else if (keystroke === "a" || keystroke === "A") {
         play("A");
     }
     else if (keystroke === "s" || keystroke === "S") {
         play("S");
     }
     else if (keystroke === "d" || keystroke === "D") {
         play("D");
     }
     else if (keystroke === "z" || keystroke === "Z") {
         play("Z");
     }
     else if (keystroke === "x" || keystroke === "X") {
         play("X");
     }
    

     }