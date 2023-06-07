let Car = {
    marca: 'Lamborghini',
    modelo: 'Aventador SVJ',
    ano: 2020,
    cor: 'azul'
}

let mostrar = document.getElementById('mostrar')

const Aluno = {
    PrimeiroNome: 'MauMau',
    SegundoNome: 'Junior',
    idade: 20,
    Nacionalidade: 'Brazuka'
}

mostrar.innerHTML = `<p>Nome: ${Aluno.PrimeiroNome}</p>`
mostrar.innerHTML += `<p>Nome: ${Aluno.SegundoNome}</p>`
mostrar.innerHTML += `<p>Idade: ${Aluno.idade}</p>`
mostrar.innerHTML += `<p>Nacionalidade: ${Aluno.Nacionalidade}</p>`


const pessoa = {
    primeiroNome: 'Bruno',
    segundoNome: 'Ruiz',
    id: 3563535,
    fullnome: function(){
        return `${this.primeiroNome} ${this.segundoNome}`
    }
}
mostrar.innerHTML += `<p>${pessoa.fullnome()}</p>`


let cor = ["Azul", "preto"]

const tarefas = [
    {
        id: 1, 
        texto: "Levar o lixo",
        completado: true,
    },
    {
        id: 2, 
        texto: "Encontrar com chefe",
        completado: true,
    },
    {
        id: 3, 
        texto: "Alomoçar",
        completado: false,
    }
]
console.log(tarefas)
tarefas.forEach(teste)

function teste(tarefas){
    console.log(tarefas.texto)
}