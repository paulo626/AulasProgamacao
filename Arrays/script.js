function gerarNumero(){
    const numero = Math.floor(Math.random()*6)
    return numero
}

const nomes = ['Morreu','ficou rico','ganhou um carro','virou clt','casou','nem te conto']
function sortearNomes(){
    const numera = gerarNumero();
    console.log(nomes[numera])
}