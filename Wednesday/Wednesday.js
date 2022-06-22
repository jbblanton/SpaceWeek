const countdownDisplay = document.getElementById("countdown-display");
const rocket = document.getElementById("rocket");
let timeRemaining = 60;

// Task:
// 1. Write the JavaScript to count down from 60 to 0 and display the remaining time
function countDown() {
    let t = 60;
    let time = setInterval(function () {
        timeRemaining -= 1;
        countdownDisplay.innerText = timeRemaining;
        t--;
        if (t === 0) {
            launch();
            clearInterval(time);
        }
    }, 1000);
}

// 2. When the countdown reaches 0, launch the rocket with an animation
function launch() {
    console.log("GOOOOOOOOOOOOOOOOO!");
    rocket.className = "go";
}

// Stretch goals:
// 1) Add fire under the rocket.
// 2) Randomly don’t launch the rocket when the timer reaches 0.

countDown();
