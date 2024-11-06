import { countries } from "../scripts/countries.js";

const renderCountries = (countries) => {
    countries.forEach(country => {makeCountry(country)})
}

const makeCountry = (country) => {
    const container = document.createElement('div')
    container.classList.add('card-country')
    container.addEventListener('mouseenter', showInfo)

    const imgContainer = document.createElement('img')
    imgContainer.src = country.flag
    imgContainer.alt = country.name

    const nameContainer = document.createElement('h2')
    nameContainer.textContent = country.name

    container.appendChild(imgContainer)
    container.appendChild(nameContainer)

    document.querySelector('main > section').appendChild(container)
} 


const showInfo = (event) => {
    //<event> es el evento que va a ocurir. <target> aquien le ocurrio el evento (muesta la linea del html). <children> muestra muetra los hijos (en este caso del div) es decir, el children se comporta como un arreglo, entonces la posicion uno es el nombre. <textContent> el texto interior de la etiqueta
    let currentCountry = event.target.children[1].textContent
    //busca cada pais y lo compara por valor
    let foundCountry = countries.find(country => country.name === currentCountry)
    
    const infoCountry = document.querySelector('#demographics')
    infoCountry.children[0].textContent = foundCountry.name
    infoCountry.children[2].textContent = foundCountry.capital
    infoCountry.children[4].textContent = foundCountry.population

    
}


// esta linea es para cargar todo el codigo <HTML> antes de ejecutar el <JS>
window.addEventListener('DOMContentLoaded', renderCountries(countries))