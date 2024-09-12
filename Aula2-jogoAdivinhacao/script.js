//SynthWave ’84
var butaoTenta = '<button class="botaoT" onclick="tentar()" id="botaotentar">tentar</button> <input type="number" id="teste_do_numero">'    

function jerarnumero(){
    const numero = Math.floor(Math.random()*10)
    return numero;
}

function jogar(){
    var div_botao = document.getElementById("divDobotao");
    var botao = document.getElementById("botaoJogar");
    botao.remove();
    div_botao.innerHTML = butaoTenta;


    var NumeroGerado = jerarnumero();
    var vidas = 3
}

function JogoGanho(){

}
function tentar(){
    let tentativa = parseInt(document.getElementById("teste_do_numero").value)

    if(tentativa == NumeroGerado){
        JogoGanho()
    }
    else{
        if(vidas < 1){
            JogoPerdido()
        }
        else{
            PedeVida(vidas)
            vidas--
        }
    }
}