/*
*******************************************************************************
********************************** BUTTONS ************************************
*******************************************************************************
*/

// Here we wil construct a function to display the buttons:

function buttonDisplay(buttonKey) {
    const displayedButton = buttonKey === "PLAY" ? playButton : pauseButton;
    const hiddenButton = buttonKey === "PLAY" ? pauseButton : playButton;
    displayedButton.style.display = "block";
    hiddenButton.style.display = "none";
}


// Here we will declare the variables for the following functions:

let startTime;
let timeElapsed = 0;
let timeInterval;

// Here we will construct the button functions:

function startButtonFunction() {
    startTime = Date.now() - timeElapsed;
    timeInterval = setInterval(function printTime() {
      timeElapsed = Date.now() - startTime;
      print(timerToString(timeElapsed));
    }, 10);
    buttonDisplay("PAUSE");
}

function pauseButtonFuntion() {
    clearInterval(timeInterval);
    buttonDisplay("PLAY");
}
  
function resetButtonFunction() {
    clearInterval(timeInterval);
    print("00:00:00");
    timeElapsed = 0;
    buttonDisplay("PLAY");
}

// Here we will construct event listeners:

let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", startButtonFunction);
pauseButton.addEventListener("click", pauseButtonFuntion);
resetButton.addEventListener("click", resetButtonFunction);


/*
*******************************************************************************
*********************************** TIMER *************************************
*******************************************************************************
*/

// Here we will construct a function to convert the time to the desired format:

function timerToString(time) {
    let differenceInHours = time / 3600000;
    let hour = Math.floor(differenceInHours);
  
    let differenceInMinutes = (differenceInHours - hour) * 60;
    let minute = Math.floor(differenceInMinutes);
  
    let differenceInSeconds = (differenceInMinutes - minute) * 60;
    let second = Math.floor(differenceInSeconds);
  
    let differenceInMilliseconds = (differenceInSeconds - second) * 100;
    let millisecond = Math.floor(differenceInMilliseconds);
  
  // Here we will format and pad the timer:
    let MINUTE = minute.toString().padStart(2, "0");
    let SECOND = second.toString().padStart(2, "0");
    let MILLISECOND = millisecond.toString().padStart(2, "0");
  
    return `${MINUTE}:${SECOND}:${MILLISECOND}`;
}
  
// Here we will construct a function that will modify the innerHTML:
  
function print(txt) {
    document.getElementById("display").innerHTML = txt;
}