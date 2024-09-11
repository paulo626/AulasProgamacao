function ver(){
    let numero = Math.floor(Math.random()*10)
    var tentativa = parseInt(document.getElementById("chute").value)
    var resultado
    let tentativa = 3
    acerto = false
    do{
        if (tentativa == numero){
            resultado = "acertou"
            acerto = true
        }
        else{
            if(tentativa = 0){
                acerto = true
                resultado = 'errou'
            }
            else{
            tentativa--
            alert(`errou,só possui mais ${tentativa} tentativas`)
            }
        }
    }
    while(acerto = false)
    
    
    //saida
    var saida = document.getElementById("resultado")
    saida.innerText=resultado
}
function jogar(){

}