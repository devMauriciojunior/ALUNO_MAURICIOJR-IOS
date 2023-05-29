// Unidimensional
// Podemos criar vetores de dois jeitos

const num1 = new Array (30, -1, 5, 3, 121);

// Ou assim

const num2 = [-2, 40, 16, 111, 33, 64];

console.log(num1 , num2)

// Acessar elementos de um array
console.log(`1° elemento de num1: ${num1[0]}`)

// Acesse o terceiro elemento do num1
console.log(`3° elemento de num1: ${num1[2]}`)

// Acesse o quinto elemento do num2
console.log(`5° elemento de num1: ${num2[4]}`)

console.log(num1[0] + num2[1])

// bidimensional
const matrix = [
    ['banana', 'maçã', 'pêra'],
    ['laranja', true, 1],
    [null, 'Uva', -350],
]

console.log(matrix)
console.log(matrix[0])
console.log(matrix[0][1])


// Alterar valores em arrays
let moedas = ['Real', 'Dólar', 'Coroa', 'Peso'];
console.log(moedas)

moedas[1] = 'Yen'
console.log(moedas)

let matrix2 = [
    [1,2,3],
    [4,5,6],
]

matrix2[0][1] = 10
console.log(matrix2)

// Tamanho de arrays
let vetor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(vetor.length)

// Remover ou adicionar elementos

// shift() remove do começo do array
// pop() remove do final do array
// push() adiciona no final do array
// unshift() adiciona no começo do array

const frutas = ["Laranja", "Banana", "Manga"]
frutas.unshift("Uva")
console.log(frutas)

// delete - remove item
const veiculos = ["Carro", "Barco", "Moto"]
delete veiculos[1]
