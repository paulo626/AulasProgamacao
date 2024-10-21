//Pergunta 1:
/*Use forEach para criar um novo array apenas com os números pares de um array existente. */
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8];

let numerosQues1 = [1, 2, 3, 4, 5, 6, 7, 8];
let NumerosPares = []

//Resposta:
numerosQues1.forEach((element) => {
    if(element % 2 === 0 ){
        NumerosPares.push(element)
    }
})
console.log(NumerosPares)

//Pergunta 2:
/*Dado um array de strings, use forEach para adicionar um prefixo "Sr(a). " a cada nome.*/
// let nomes = ["João", "Maria", "Carlos", "Ana"];

let nomesQuest2 = ["João", "Maria", "Carlos", "Ana"];
let nomeSr = []

nomesQuest2.forEach( (element) => {
    nomeSr.push(`Sr${element}`)
})
    console.log(nomeSr)

//Pergunta 3:
/*Dado um array de números, use forEach para contar quantos números são maiores que 10.*/

let numerosQuest3 = [4, 11, 8, 15, 23, 7, 2];
numeroMaior = []

numerosQuest3.forEach( (element) => {
    if(element> 10){
        numeroMaior.push(element)
    }
})
console.log(numeroMaior)


//Pergunta 4:
/*Dada uma string de uma frase, divida-a em palavras e use forEach para contar quantas palavras existem. 
Dica: você deve utilizar um método chamado split para dividir as letras de uma frase em um array..*/

let fraseQuest4 = "Memphis Depay é Brabo";
let novo = 0
const feoru = fraseQuest4.split(' ')

feoru.forEach((element) => {
    novo++
})
console.log(novo)

//Pergunta 5:
/* Dado um array de nomes, use forEach para converter todos os nomes para letras maiúsculas.*/
    let nomesQuets5 = ["ana", "carlos", "maria"];
    let nomesMaisculos = []
    nomesQuets5.forEach((element) => {
    nomesMaisculos.push(element.toUpperCase())
});
console.log(nomesMaisculos)