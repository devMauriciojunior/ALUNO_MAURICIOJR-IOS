const KM = document.getElementById("KM")
const resultado = document.getElementById("resultado")

function CalcularKM () {
    if (KM.value > 80) {
        let subtração = parseInt(KM.value) - 80
        let multa = subtração * 5
        resultado.innerHTML = `VOCÊ SERA MULTADO<br>R$${multa}`
    } else {
        resultado.innerHTML = "VOCÊ NÃO FOI MULTADO"
    }
}

function reset () {
    location.reload();
}