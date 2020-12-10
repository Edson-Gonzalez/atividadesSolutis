/*Crie duas listas de 10 posições e crie uma
terceira lista contendo, nas posições pares os
valores do primeira lista e nas posições
impares os valores do segunda lista.*/

//import { createArray } from "createArray.js"

//Comentar se necessário.
function createArray(){
    const values = [];
    for (let i=0; i<10; i++){
        values[i] = Math.floor(Math.random() * 30);
    }
    return values;
}

const listaA = createArray();
const listaB = createArray();
const listaC = [];

for (let i=0; i<10; i++){
    if (i%2 == 0){
        listaC[i] = listaB[i];
    }else{
        listaC[i] = listaA[i];
    }
}

console.log(listaA);
console.log(listaB);
console.log(listaC);