let X = document.getElementById('ValorInicio');
let Y = document.getElementById('ValorFinal');

function Contar() {
    
    while(Number(X.value) <= Number(Y.value)) {
        let paragrafo = document.createElement("p")
        let txt = document.createTextNode(X.value)
        paragrafo.appendChild(txt)
        document.getElementById("contar").appendChild(paragrafo)
        X.value++
    }
}




// while (X <= 10) {
//     // Cria um elemento
//     let Paragrafo = document.createElement('p');
//     // Adiciona um texto no elemento
//     document.getElementById('contar').appendChild(Paragrafo)
//     // Mostra o elemento na tela
//     Paragrafo.innerHTML = X
//     X++
// }