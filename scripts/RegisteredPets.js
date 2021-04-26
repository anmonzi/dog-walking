import { getPets, getWalkers } from "./database.js"

const pets = getPets()
const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id.startsWith("pet")) {
            const [, petId] = clickEvent.target.id.split("--")
            const petIdNumber = parseInt(petId)

            for (const pet of pets) {
                if (pet.id === petIdNumber) {
                    const petWalkerId = pet.walkerId

                    for (const walker of walkers) {
                        if (walker.id === petWalkerId) {
                            window.alert(`${pet.name} is being walked by ${walker.name}`)
                        }
                    }
                }
            } 
        }
    }
)



export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

