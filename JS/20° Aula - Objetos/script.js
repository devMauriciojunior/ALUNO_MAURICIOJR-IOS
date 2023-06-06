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