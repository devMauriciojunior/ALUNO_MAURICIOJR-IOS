function Media() {

    const N1 = document.getElementById("N1");
    const N2 = document.getElementById("N2");
    const N3 = document.getElementById("N3");
    const Nome = document.getElementById("Nome");
    const resultado = document.getElementById("Resultado");

    const media = (parseInt(N1.value) + parseInt(N2.value) + parseInt(N3.value)) / 3;

    if(media >= 7) {
        resultado.innerHTML = `<span class="nome">${Nome.value}</span> você foi <span class="aprovado">aprovado</span> com média acima de 7, sua média foi: <span class="aprovado">${Math.floor(media)}</span>.`
    } else {
        resultado.innerHTML = `<span class="nome">${Nome.value}</span> você foi <span class="reprovado">reprovado</span> com média abaixo de 7, sua média foi: <span class="reprovado">${Math.floor(media)}</span>.`  
    }
};