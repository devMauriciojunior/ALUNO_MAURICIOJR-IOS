let vidaHeroi; let ataqueHeroi;
let xpHeroi; let levelHeroi;
let classesHeroi = ["Mago", "Ninja", "Viking", "Arqueiro"];
let nomeHeroi = document.getElementById("Personagem");
let mensagemHeroi = document.getElementById("Mensagem");

function Enviar() {
    if (nomeHeroi.value == "") {
        alert("----- Escreva seu nome!! -----");
        return;
    }
        mensagemHeroi.innerHTML = `Olá ${nomeHeroi.value}.
        <br> Seja bem-vindo ao jogo!`   
}