
let numero =  4.7;
console.log(Math.round(numero))

//4.5 => 5
//4.49 => 4

let numero2 = (4.1)
console.log(Math.ceil(numero2))
//4.1 => 5

let numero3 = (4.1)
console.log(Math.floor(numero2))
// 4.9 => 4

//--------------------------------------


//potenciação
console.log(
    Math.pow(
        5,//base
        2//potencia
    )
)


//raiz quadrada 
console.log(Math.sqrt(36))


//Math.abs modulo 
console.log(Math.abs(-5))
// -8 => 8 ; -656 => 656


console.log(Math.min(3,45,48,23,1,632,75,133))
// 3 ; retorna o menor numero escrito

console.log(Math.max(3,45,48,23,1,632,75,133))
// 632 ; retorna o maior numero escrito


//numero aleatorio
var numeroAle = Math.random()
console.log(numeroAle)


//numero aleatorio de 0 a 9
Math.floor(Math.random()*10)