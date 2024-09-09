//SynthWave ’84


function exe2(){
    let numero1 = parseInt(prompt("digite o numeor da base"))
    let numero2 = parseInt(prompt("digite o numeor da potencia"))
    let resultado = Math.pow(
        numero1,//base
        numero2//potencia
    )
    alert(`O resultado da conta é ${resultado}`)

}
function exe3(){
    let numero1 = parseInt(prompt("digite um numero"))
    let numero2 = parseInt(prompt("digite um outro"))
    let numero3 = parseInt(prompt("digite um numero"))
    let numero4 = parseInt(prompt("digite um outro"))
    alert(`O menor numero é ${Math.min(numero1,numero2,numero3,numero4,)}`)
    // 3 ; retorna o menor numero escrito

    alert(`O maior numero é ${Math.max(numero1,numero2,numero3,numero4,)}`)
    // 632 ; retorna o maior numero escrito

}

function exe4(){
    alert(Math.floor(Math.random()*100))}
exe4()