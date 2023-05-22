let Valor = document.getElementById("receberValor")
let resultado = document.getElementById("parOuImpar")

function PAR() {
    if (Valor.value % 2 == 0) {
        resultado.innerHTML = "Par"
    } else {
        resultado.innerHTML = "Impar"
    }
}