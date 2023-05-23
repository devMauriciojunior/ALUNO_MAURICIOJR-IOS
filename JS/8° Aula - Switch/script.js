let numero = document.getElementById("numero");
let resposta = document.getElementById("resposta");

function Aperte() {
    switch(numero.value) {
        case "1":
            resposta.innerHTML = "Você escolheu 1"
            break;

        case "2":
            resposta.innerHTML = "Você escolheu 2"
            break


        default:
            resposta.innerHTML = "Você não escolheu"
            break    
    }
}