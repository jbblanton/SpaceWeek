const solarSystem = document.getElementById("solarSystem");
const planetsObj = [
    {
        name: "Mercury",
        moons: 0,
    },
    {
        name: "Venus",
        moons: 0,
    },
    {
        name: "Earth",
        moons: 1,
    },
    {
        name: "Mars",
        moons: 2,
    },
    {
        name: "Jupiter",
        moons: 67,
    },
    {
        name: "Saturn",
        moons: 62,
    },
    {
        name: "Uranus",
        moons: 27,
    },
    {
        name: "Neptune",
        moons: 14,
    },
];

// Task:
// 1. Display each planet’s name and number of moons in the DOM
function planetMoons() {
    const planets = document.createElement("ol");
    for (let planet of planetsObj) {
        let orb = document.createElement("li");
        orb.innerText = `${planet.name}: ${planet.moons} moons.`;
        planets.appendChild(orb);
    }
    solarSystem.appendChild(planets);
}

// 2. Calculate and display the total number of moons in the solar system below
function totalMoons() {
    let total = 0;
    for (let moon of planetsObj) {
        total += moon.moons;
    }

    const solarMoons = document.createElement("p");
    solarMoons.className = "total-moons-p";
    solarMoons.innerText = `There are ${total} moons in our solar system.`;

    solarSystem.appendChild(solarMoons);
}

// Stretch goals:
// - 1: Make the numbers count up on page load
// - 2: Make the planet names bold.

planetMoons();
totalMoons();
