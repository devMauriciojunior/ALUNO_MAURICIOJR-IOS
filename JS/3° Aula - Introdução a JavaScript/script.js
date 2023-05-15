let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let resul = document.getElementById("resultado");
let somar;

function Somar() {
    somar = parseInt(n1.value) + parseInt(n2.value)
    resul.innerHTML = somar
}