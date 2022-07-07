import { pizzas } from "./pizzas.js"
import { limpiarHTML } from "./limpiarHTML.js"
import { mostrarPizzas } from "./mostrarPizzas.js"
import { mostrarError }  from "./mostrarErorr.js"
import { filterPizzas }  from "./filter.js"
import { datoBusqueda }  from "./datosBusqueda.js"


const form = document.querySelector('.form')

window.addEventListener('load', () => {
    const strPizzas = JSON.stringify(pizzas)
    localStorage.setItem('pizzas', strPizzas)

    const LSPizzas = localStorage.getItem('pizzas')
    const JSONPizzas = JSON.parse(LSPizzas)

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const buscar = document.querySelector('#buscar').value.toUpperCase()
        
        const ifPizza = JSONPizzas.find(pizza => pizza.nombre == buscar)
        console.log(ifPizza);
        console.log(buscar);
        //if(buscar == "MOZZARELLA" || buscar == "4 QUESOS" || buscar == "ESPECIAL" || buscar == "RUCULA" || buscar == "CANTIMPALO" || buscar == "NAPOLITANA") {
        if(ifPizza){
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