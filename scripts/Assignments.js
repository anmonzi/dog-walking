import { getCities, getPets, getWalkers } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalker) => {
    let petWalker = null

    for (const walker of allWalker) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

// Function whose responsibility is to find the city name assigned to a walker
const findCity = (walker, allCities) => {
    let foundCity = null

    for (const city of allCities) {
        if (city.id === walker.cityId) {
            foundCity = city
        }
    }

    return foundCity
}



export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        const currentCity = findCity(currentPetWalker, cities)
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentCity.name}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

