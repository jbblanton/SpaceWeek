#Scrimba Challenge Week - Space 

const solarSystem = document.getElementById("solarSystem")
const planets = [
    {
    "name": "Mercury",
    "diameter": 4879,
    "color": "grey",
    "fact": "Mercury is the smallest planet, with a radius of 1,516 miles (whic is smaller than Jupiter's largest moon, Ganymede!)."
    },
    {
    "name": "Venus",
    "diameter": 12104,
    "color": "yellow",
    "fact": "Venus spins slowly in the opposite direction from most planets."
    },
    {
    "name": "Earth",
    "diameter": 12742,
    "color": "green",
    "fact": "Earth is the only planet in our solar system with liquid water on the surface."
    },
    {
    "name": "Mars",
    "diameter": 6779,
    "color": "pink",
    "fact": "Mars has two moons named Phobos and Deimos."
    },
    {
    "name": "Jupiter",
    "diameter": 139822,
    "color": "yellow",
    "fact": "Jupiter's diameter is roughly 11 times that of Earth."
    },
    {
    "name": "Saturn",
    "diameter": 116464,
    "color": "orange",
    "fact": "Saturn is a gas-giant planet and therefore does not have a solid surface like Earth’s."
    },
    {
    "name": "Uranus",
    "diameter": 50724,
    "color": "grey",
    "fact": "Like Venus, Uranus rotates east to west. But Uranus is unique in that it rotates on its side."
    },
    {
    "name": "Neptune",
    "diameter": 49244,
    "color": "blue",
    "fact": "Neptune was the first planet located through mathematical calculations, rather than by telescope."
    }
]

// Task:
// Write a function to render 
// the planets from the planets array using JavaScript.
const main = document.getElementById('solarSystem')

// loop the array and create & add as divs, add all to the main
function makePlanets() {
   
    for (let orb of planets) {
        // Stretch goals:
        // - 1. Show planet facts on hover
        const tooltip = document.createElement("div")
        tooltip.className = "tooltip"
        const tooltipText = document.createElement("span")
        tooltipText.className = "tooltiptext"
        tooltipText.innerText = orb.fact
        tooltip.appendChild(tooltipText)
    
        let size = orb.diameter * .001
        const newOrb = document.createElement("div")
        newOrb.className = "planet"
        newOrb.id = orb.name
        newOrb.style.backgroundColor = `var(--${orb.color})`
        newOrb.style.width = `${size}px`
        newOrb.style.height = `${size}px`
        tooltip.appendChild(newOrb)
        main.appendChild(tooltip)
    }
    
}

makePlanets()