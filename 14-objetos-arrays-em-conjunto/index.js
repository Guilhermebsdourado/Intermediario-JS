// let jogo1 = {
//     nome: 'God of War'
// }

// let jogo2 = {
//     nome: 'Clash'
// }

// let videoGame = {
//     nome: 'Xbox',
//     valor: 3000,
//     jogos: [jogo1, jogo2]
// }

// let jogo3 ={
//     nome: 'Need For Speed'
// }

// videoGame.jogos.push(jogo3)

// console.log(videoGame)

// let videoGame = {
//     nome: 'Xbox',
//     valor: 3000,
//     jogos: [
//         { nome: 'God of War'},
//         { nome: 'Need for Speed'}
//     ]
// }

// console.log(videoGame.jogos)

let cliente = {
    nome: 'Ricardo',
    ultimoPedido: {
        produtos: 'Xbox',
        valor: 3000,
        jogos: [
            { nome: 'Need for Speed'}
        ]
    }
}
let jogo2 = {
    nome: 'God of War'
}
cliente.ultimoPedido.jogos.push(jogo2)

console.log(cliente.ultimoPedido.jogos[1])