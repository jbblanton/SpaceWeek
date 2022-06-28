const solarSystem = document.getElementById("solarSystem");
const planets = [
    {
        name: "Mercury",
        diameter: 4879,
        color: "grey",
        moons: 0,
    },
    {
        name: "Venus",
        diameter: 12104,
        color: "yellow",
        moons: 0,
    },
    {
        name: "Earth",
        diameter: 12742,
        color: "green",
        moons: 1,
    },
    {
        name: "Mars",
        diameter: 6779,
        color: "pink",
        moons: 2,
    },
    {
        name: "Jupiter",
        diameter: 139822,
        color: "yellow",
        moons: 67,
    },
    {
        name: "Saturn",
        diameter: 116464,
        color: "orange",
        moons: 62,
    },
    {
        name: "Uranus",
        diameter: 50724,
        color: "grey",
        moons: 27,
    },
    {
        name: "Neptune",
        diameter: 49244,
        color: "blue",
        moons: 14,
    },
    {
        name: "Pluto",
        diameter: 2370,
        color: "white",
        moons: 0,
    },
];
// Task:
// NOTE: these should be done without changing the code above line 50

// 1. Remove Pluto from the planets array
const plutoIdx = planets.indexOf((ele) => ele.name === "Pluto");
planets.splice(plutoIdx, 1);

// 2. Add a new planet to the planets array (invent one)
const hippo = {
    name: "Hippo",
    diameter: 30000,
    color: "lavender",
    fact:
        "Named for Hippo, one of the 3,000 Oceanids, water-nymph daughters of the Titans Oceanus and his sister-spouse Tethys.",
    moons: 5,
};
planets.splice(1, 0, hippo);

function renderPlanets() {
    for (let i = 0; i < planets.length; i++) {
        const planet = document.createElement("div");
        planet.style.minHeight = `${planets[i].diameter / 1000}px`;
        planet.style.minWidth = `${planets[i].diameter / 1000}px`;
        planet.style.background = `conic-gradient( 
            black 0deg 180deg, 
            var(--${planets[i].color}) 180deg 360deg)`;
        planet.classList.add("planet");
        solarSystem.appendChild(planet);
    }
}

renderPlanets();

// Stretch goals:
// - 1. Add a new fact to one of the planets, e.g whether it has rings.
// - 2. Add the moons to each planet (see previous challenge for the numbers of moons required.)
function addMoons() {}
