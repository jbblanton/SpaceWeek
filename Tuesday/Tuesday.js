// Task:
// Write a function to display a galaxy of stars (at least 100) in the DOM.
// Note: This requires very little code!

// Stretch goals:
// - 1. Ensure that the stars always fill each line

const starArr = ["🌟", "🌠", "✨", "⭐", "⭐", "⭐", "⭐", "⭐", "⭐"];

const galaxy = document.getElementById("galaxy"); // div

function displayStars() {
    let n = 350;

    while (n > 0) {
        const star = document.createElement("p");
        star.innerText += starArr[Math.floor(Math.random() * 9)];
        let pix = randomSize();
        star.style.fontSize = `${pix}px`;
        galaxy.appendChild(star);
        n--;
    }
}

// - 2. Add different sizes of star
function randomSize() {
    return Math.floor(Math.random() * 25);
}

displayStars();
