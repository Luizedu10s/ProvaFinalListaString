let sum = (vetor) => {
    let num_vetor = 0;
    for(let i of vetor){
        num_vetor += i;
    }
    console.log(num_vetor);
}

let sumOdds = (vetor) => {
    let subVetor = [];
    let SomaT = 0;
    for(let i of vetor){
        if(i % 2 != 0){
            subVetor.push(i)
        }
    }
    for(let i of subVetor){
        SomaT += i
    }
    console.log(SomaT)
}

let product = (vetor) => {
    let num_vetor = 1;
    for(let i of vetor){
        num_vetor *= i;
    }
    console.log(num_vetor);
}
