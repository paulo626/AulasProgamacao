

function sorteio(){
    let numero = Math.floor(Math.random()*3)
    let lista = ['papel','tesoura','pedra']
    return lista[numero]
}

function jogar(){
    let escolhaUsuario = document.getElementById('escolhido').value
    let escolha = sorteio()

    switch (escolha){
        case 'papel':
            switch(escolhaUsuario){
                case 'papel':
                    console.log('empate')
                    break;
                case 'tesoura':
                    console.log('Venceu')
                    break;
                case 'pedra':
                    console.log('perdeu')
                    break;
            }
            break;

        case 'tesoura':
            switch(escolhaUsuario){
                case 'papel':
                    console.log('Perde')
                    break;
                case 'tesoura':
                    console.log('Empate')
                    break;
                case 'pedra':
                    console.log('ganho')
                    break;
            }
            break;

        case 'pedra':
            switch(escolhaUsuario){
                case 'papel':
                    console.log('Ganho')
                    break;
                case 'tesoura':
                    console.log('perdeu')
                    break;
                case 'pedra':
                    console.log('empate')
                    break;
            }
            break;
    }

}
