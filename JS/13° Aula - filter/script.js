let idade = [20, 19, 17, 26, 27];
console.log(idade)

// Filter() cria um array com o resultado do filter aplicado pelo método, os elementos que "passaram" na condição determinado pelo no filtro.

let mostrar = document.getElementById("demonstracao");
mostrar.innerHTML = idade.filter(Maiordeidade)

function Maiordeidade(idade){
    return idade > 17;
}

console.log(idade)
