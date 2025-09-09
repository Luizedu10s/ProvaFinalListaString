let gerarNome = (nome) => {
    let nomeArray = nome.split(' ')
    let nomeNormal = nomeArray[nomeArray.length-1] + ";";
    let nomeCompacto = nomeArray[nomeArray.length-1] + ",";
    for(let i in nomeArray){
        if(i != nomeArray.length-1){
            nomeNormal += " " + nomeArray[i]
            nomeCompacto += " " + nomeArray[i].charAt(0) + "."
        }
    }
    console.log(nomeNormal)
    console.log(nomeCompacto)
}

gerarNome("João da Silva Melo");