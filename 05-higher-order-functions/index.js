// const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir){
//     const mesAtual = 2
//     let anoDeNascimento = 2001 - idade
//     if(mesDeNascimento > mesAtual) anoDeNascimento -- 
//     imprimir(anoDeNascimento)
// }

// let imprimirAnoDeNascimento = anoDeNascimento => {
//     console.log('Seu ano de nascimento é: ' + anoDeNascimento)
// }

// calcularAnoDeNascimento(33, 3, imprimirAnoDeNascimento)

function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadriplicar = multiplicar(4)

console.log(dobrar(3))
console.log(triplicar(3))
console.log(quadruplicar(3))