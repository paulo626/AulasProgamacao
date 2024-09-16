
//let numeroAle = Math.floor(Math.random()*10);

function geraNumeroAle(){
    let numeroAle = Math.floor(Math.random()*10)+1;
    return numeroAle
}

function jogar(){
    const numeroAlee = geraNumeroAle();
    let vidas =  3
    let jogoGanho = false
    do{
        let palpite = parseInt(prompt(`digita ai ${vidas} numeroAle =${numeroAlee}`))
        if(palpite == numeroAlee){
            jogoGanho = true
            alert('ganhou')
        }
        else{
            vidas--
            if(vidas >=1){
            if(Math.max(palpite,numeroAlee) == palpite){alert(`seu palpite (${palpite}) é maior que o numero secreto`)}
            else{alert(`seu palpite (${palpite}) é menor que o numero secreto`)}
            }
            else{
                alert('perdeu')
                jogoGanho = true
            }
        }
    }
    while(jogoGanho == false)
}


jogar()