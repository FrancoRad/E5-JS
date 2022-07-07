import { limpiarError, limpiarHTML } from "./limpiarHTML.js"
import { mostrarPizzas } from "./mostrarPizzas.js"
import { pizzas } from "./pizzas.js"

const error = document.querySelector('.error')

export function mostrarError(mensaje) {
    
    limpiarHTML()

    const divConteinerError = document.createElement('div')
    divConteinerError.classList.add('conteinerError')

    const divError = document.createElement('div')
    divError.classList.add('claseError')
    divConteinerError.appendChild(divError)

    const textoError = document.createElement('h4')
    textoError.innerText = `${mensaje}`
    divError.appendChild(textoError)

    error.appendChild(divConteinerError)

    setTimeout(() => {
        limpiarError()
        mostrarPizzas(pizzas)
    }, 3000)
} 