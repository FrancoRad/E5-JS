const cards = document.querySelector('.cards')

export function limpiarHTML() {
    while(cards.firstChild) {
        cards.removeChild(cards.firstChild)
    }
}

export function limpiarError(){
    const error = document.querySelector('.error')
    while(error.firstChild) {
        error.removeChild(error.firstChild)
    }
}