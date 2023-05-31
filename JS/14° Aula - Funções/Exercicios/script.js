// Criar uma função para identificar se o numero é par ou impar
// Par ou impar(5) retorna impar
// Par ou impar(4) retorna par

let ParouImpar = (a) => {
    if (a % 2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

// Arrow function com operador ternário
let ParouImpara = (a) => (a % 2 == 0 ? 'Par' : 'Impar');
ParouImpara()