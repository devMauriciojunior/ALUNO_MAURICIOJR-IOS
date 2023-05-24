let N1 = document.getElementById("Number1");
let N2 = document.getElementById("Number2");
let resposta = document.getElementById("resposta")

function Calcular() {
    if(N1.value == "" || N2.value == "") {
        alert('Confirme os valores digitados!!');
        return;
    }

    const somar = document.getElementById("Somar")
    const subtrair = document.getElementById("Subtracao")
    const multiplicar = document.getElementById("Multiplicar")
    const dividir = document.getElementById("Dividir")

    if(somar.checked) {
        let operacaoMais = parseInt(N1.value) + parseInt(N2.value)
        resposta.innerHTML = operacaoMais
    }
    if(subtrair.checked) {
        let operacaoMenos = parseInt(N1.value) - parseInt(N2.value)
        resposta.innerHTML = operacaoMenos
    }
    if(multiplicar.checked) {
        let operacaoMultiplicar = parseInt(N1.value) * parseInt(N2.value)
        resposta.innerHTML = operacaoMultiplicar
    }
    if(dividir.checked) {
        let operacaoDividir = parseInt(N1.value) / parseInt(N2.value)
        resposta.innerHTML = operacaoDividir.toFixed(2)
    }

}