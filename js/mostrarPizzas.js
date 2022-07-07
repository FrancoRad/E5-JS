import { limpiarHTML } from "./limpiarHTML.js"

export function mostrarPizzas(resultado) {
    limpiarHTML()
    resultado.map(pizza => {
        const {nombre, ingredientes, precio, imagen} = pizza

        const cards = document.querySelector('.cards')

        const cardContainer = document.createElement('div')
        cardContainer.classList.add('card')

        const img = document.createElement('img')
        img.classList.add('cardImg')
        img.src = `${imagen}`
        cardContainer.appendChild(img)

        const divPizzas = document.createElement('div')
        divPizzas.classList.add('cardInfo')
        cardContainer.appendChild(divPizzas)

        const nombrePizza = document.createElement('h2')
        nombrePizza.innerText = `${nombre}`
        divPizzas.appendChild(nombrePizza)

        const tituloIngredientes = document.createElement('h3')
        tituloIngredientes.innerText = `Ingredientes:`
        divPizzas.appendChild(tituloIngredientes)

        const ingredientesPizza = document.createElement('ul')
        divPizzas.appendChild(ingredientesPizza)
        pizza.ingredientes.map(ingredPizza => {
            const ingredient = document.createElement('li')
            ingredient.innerText = ingredPizza
            ingredientesPizza.appendChild(ingredient)
        })

        const precioPizza = document.createElement('p')
        precioPizza.innerText = `${precio}`
        divPizzas.appendChild(precioPizza)

        cards.appendChild(cardContainer)
    })
}