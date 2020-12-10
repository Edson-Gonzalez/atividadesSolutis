/*Faça um programa que leia uma lista A e uma
lista B de inteiros de 10 posições. Depois gere
uma lista C que será o produto dos valores
correspondentes dos vetores A e B.*/

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
    listaC[i] = listaA[i] * listaB[i];
}

console.log(listaA);
console.log(listaB);
console.log(listaC);