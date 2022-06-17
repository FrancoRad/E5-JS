const pizzas = [
  {
    id: 1,
    nombre: "Mozzarella",
    ingredientes: ["harina", "agua", "tomate", "mozzarella"],
    precio: "$"+400,
    imagen: "https://thumbs.dreamstime.com/b/pizza-cuatro-quesos-en-un-tablero-de-madera-sabrosa-218042441.jpg"
  },
  {
    id: 2,
    nombre: "4 quesos",
    ingredientes: [
      "harina",
      "agua",
      "mozzarella",
      "gruyere",
      "roquefort"
    ],
    precio: "$"+500,
    imagen: "https://www.bofrost.es/writable/products/images-v2/01774.jpg"
  },
  {
    id: 3,
    nombre: "Especial",
    ingredientes: ["harina", "agua", "tomate", "queso", "jamon", "huevo"],
    precio: "$"+650,
    imagen: "https://www.boxonline.com.ar/images/img-pizzas-esp.png"
  },
  {
    id: 4,
    nombre: "Rucula",
    ingredientes: [
      "harina",
      "agua",
      "queso",
      "crudo",
      "rucula"
    ],
    precio: "$"+800,
    imagen: "https://static-sevilla.abc.es/media/gurmesevilla/2015/03/pizza-de-tomatitos-cherry-con-rucula.jpg"
  },
  {
    id: 5,
    nombre: "Cantimpalo",
    ingredientes: ["harina", "agua", "tomate", "mozzarella", "cantimpalo"],
    precio: "$"+650,
    imagen: "https://www.lavanguardia.com/files/image_948_465/uploads/2017/11/21/5e9977a58c570.jpeg"
  },
  {
    id: 6,
    nombre: "Napolitana",
    ingredientes: ["harina", "agua", "tomate", "mozzarella", "oregano"],
    precio: "$"+550,
    imagen: "https://okdiario.com/img/2016/08/15/pizza-napolitana-sin-gluten.jpg"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // Cargar desde localStorage o inicializar como arreglo vacío
  var pizzas = JSON.parse(localStorage.getItem('pizzas')) || [];
  var id = localStorage.getItem('valorId')
  var inputValue = localStorage.getItem('valorInput')
  console.log(inputValue);

  if(inputValue == 0 || inputValue > pizzas.length){
    inputValue = 1
    localStorage.setItem('valorInput', inputValue)
    p.textContent = ""
    h2.textContent = "No existe la pizza seleccionada"
    h4.textContent = "Por favor ingrese un valor"
    h5.textContent = ""
    image.innerHTML =  `<img width=0, height=0, src="">`
    console.log("vacio ok");
  }else{
    pizzas = pizzas[id-1]
    p.textContent = "N° ingresado: " + pizzas.id
    h2.textContent = "Nombre: " + pizzas.nombre
    h4.textContent = "Precio: " + pizzas.precio
    h5.textContent = "Ingredientes: "+ pizzas.ingredientes
    image.innerHTML =  `<img width=130, height=130, src="${pizzas.imagen}">`
  }
});

localStorage.setItem('pizzas', JSON.stringify(pizzas))
const strLocalPizzas = JSON.parse(localStorage.getItem('pizzas'))

h3.textContent = "Elija las pizzas del 1 al " + pizzas.length
var image = document.getElementById("imagenPizza")
image.classList.add('image')

const getValueInput = () =>{
  var inputValue = document.getElementById("numero").value
  strLocalPizzas.map(dato => {  
    var {id, nombre, ingredientes, precio, imagen} = dato
    if (id == inputValue) {
        localStorage.setItem('valorId', id)
        localStorage.getItem('valorId')
        p.textContent = "N° ingresado: " + id
        h2.textContent = "Nombre: " + nombre
        h4.textContent = "Precio: " + precio
        h5.textContent = "Ingredientes: "+ ingredientes
        image.innerHTML =  `<img width=130, height=130, src="${imagen}">`
    }else{
      if (inputValue == 0 || inputValue> strLocalPizzas.length) {
        localStorage.setItem('valorInput', inputValue)
        localStorage.getItem('valorInput')
        p.textContent = ""
        h2.textContent = "No existe la pizza seleccionada"
        h4.textContent = "Por favor ingrese un valor"
        h5.textContent = ""
        image.innerHTML =  `<img width=0, height=0, src="">`
        console.log("presiono vacio");
      }
    } 
  })
}
