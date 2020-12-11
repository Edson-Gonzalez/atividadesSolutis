function createArray(){
    return new Array(10).fill(null).map(() => Math.floor(Math.random() * 30));
}

const listaA = createArray();
const listaB = createArray();
const listaC = new Array(10).fill(null).map((current, index) => 
    current = listaB[index] * listaA[index]);

console.log(listaA);
console.log(listaB);
console.log(listaC);