let idade = document.getElementById('idade'); 
let titulo = document.getElementById('titulo'); 
let resultado = docume.getElementById('resultado')

function Click() {
    if (idade.value >= 16 && titulo.value === "Sim") {
    alert("Pode votar");
} else {
    alert("Não pode votar");
}}



let minutos; let preco;

if (minutos <= 200) {
    preco = 0.2
} else {
    if (minutos <= 400) {
        preco = 0.18
    } else {
        preco = 0.15
}
} 

