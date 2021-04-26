import { getCities, getWalkers } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.id.startsWith("walker")) {
            const [,walkerId] = clickEvent.target.id.split("--")
            const walkerIdNumber = parseInt(walkerId)

            for (const walker of walkers) {
                if (walker.id === walkerIdNumber) {
                    const walkerCityId = walker.cityId

                    for (const city of cities) {
                        if (city.id === walkerCityId) {
                            window.alert(`${walker.name} services ${city.name}`)
                        }
                    }
                }
            }
        }
    }
)



export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}
