let vidaHeroi; let ataqueHeroi;
let xpHeroi; let levelHeroi;
let classesHeroi = ["Mago", "Ninja", "Viking", "Arqueiro"];
let nomeHeroi = document.getElementById("Personagem");
let mensagemHeroi = document.getElementById("Mensagem");

function Enviar() {
    if (nomeHeroi.value == "") {
        alert("-----   Escreva seu nome!!   -----");
        return;
    }
        mensagemHeroi.innerHTML = `Olá <span>${nomeHeroi.value}</span>.
        <br> Seja bem-vindo ao jogo!`   
}