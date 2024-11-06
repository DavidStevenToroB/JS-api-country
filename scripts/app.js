import { countries } from "../scripts/countries.js";

const allCards = (countries) => {
    countries.forEach(country => {
      makeCountry(country)  
    })
}

const makeCountry = (country) => {
    const container = document.createElement('div')
    container.classList.add('card-country')

    const imgContainer = document.createElement('img')
    imgContainer.src = country.flag
    imgContainer.alt = country.name

    const nameContainer = document.createElement('h2')
    nameContainer.textContent = country.name

    container.appendChild(imgContainer)
    container.appendChild(nameContainer)

    document.querySelector('main > section').appendChild(container)
} 

// esta linea es para cargar todo el codigo antes de ejecutarlo

window.addEventListener('DOMContentLoaded', allCards(countries))