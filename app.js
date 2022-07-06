
import { pizzas } from "./pizzas.js"

const datoBusqueda = {
    nombre: ""
}
const form = document.querySelector('.navBar__form')

window.addEventListener('load', () => {
    const strPizzas = JSON.stringify(pizzas)
    localStorage.setItem('pizzas', strPizzas)

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const buscar = document.querySelector('#buscar').value
        
        if(buscar == "Mozzarella" || buscar == "4 quesos" || buscar == "Especial" || buscar == "Rucula" || buscar == "Cantimpalo" || buscar == "Napolitana") {
            datoBusqueda.nombre = buscar
            filterPizzas()
        } else {
            if (!buscar) {
                mostrarError('Ingrese un nombre de pizza por favor')
            } else {
                mostrarError('Ingrese una pizza del menu')
            }
        }
    })
    mostrarPizzas(pizzas)
})
function mostrarPizzas(resultado) {
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

        const tituloIngredientes = document.createElement('p')
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
/* limpiar html */

function limpiarHTML() {
    const cards = document.querySelector('.cards')
    while(cards.firstChild) {
        cards.removeChild(cards.firstChild)
    }
}
/* filter */
function filterPizzas() {
    const result = pizzas.filter(filterNombre);

    if (result.length) {
        mostrarPizzas(result);
    } else {
        limpiarHTML()
        mostrarPizzas('No se encontraron resultados');
        console.log("else filterPizzas");
    }
};

function filterNombre(pizza) {
    if(datoBusqueda.nombre) {
        console.log('Encontrado');
        return pizza.nombre === datoBusqueda.nombre
    }
    return pizza
}

/*error*/
const error = document.querySelector('.error')

function mostrarError(mensaje) {
    
    error.innerText = mensaje;
    limpiarHTML()
    console.log("el error es:" + mensaje);
    setTimeout(() => {
        error.innerText = '';
        mostrarPizzas(pizzas)
    }, 5000)
} 