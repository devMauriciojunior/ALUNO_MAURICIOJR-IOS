let semana = document.getElementById('semana')
let resposta = document.getElementById('resposta')


function Validar() {
    switch(semana.value) {
        case "1": 
            resposta.innerHTML = "Domingo-Feira - Final de semana!"
        break;

        case "2":
            resposta.innerHTML = "Segunda-Feira - Dia Útil!"
        break;

        case "3":
            resposta.innerHTML = "Terça-Feira - Dia Útil!"
        break;

        case "4":
            resposta.innerHTML = "Quarta-Feira - Dia Útil!"
        break;

        case "5":
            resposta.innerHTML = "Quinta-Feira - Dia Útil!"
        break;

        case "6":
            resposta.innerHTML = "Sexta-Feira - Dia Útil!"
        break;

        case "7":
            resposta.innerHTML = "Sábado-Feira - Final de semana!"
        break;
        }
}