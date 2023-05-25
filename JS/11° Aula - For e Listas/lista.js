let btn = document.getElementById("btn")
let item = document.getElementById("Item")

function MinhaLista() {
    // Cria um elemento Li
    let Li = document.createElement("li")
    // Cria um texto
    let Txt = document.createTextNode(item.value)
    // Adiciona um texto no elemento
    Li.appendChild(Txt)
    // adicionar o li na MINHALISTA
    document.getElementById("MinhaLista").appendChild(Li)
}