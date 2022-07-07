import { mostrarPizzas } from "./mostrarPizzas.js"
import { pizzas } from "./pizzas.js"
import { datoBusqueda }  from "./datosBusqueda.js"
import { limpiarError, limpiarHTML } from "./limpiarHTML.js"

export function filterPizzas() {
    const result = pizzas.filter(filterNombre);

    if (result.length) {
        limpiarError()
        mostrarPizzas(result);
        setTimeout(() => {
            limpiarHTML()
            mostrarPizzas(pizzas)
        }, 3000)
    } else {
        limpiarHTML()
        mostrarPizzas('No se encontraron resultados');
    }
};

function filterNombre(pizza) {
    if(datoBusqueda.nombre) {
        return pizza.nombre === datoBusqueda.nombre
    }
    return pizza
}