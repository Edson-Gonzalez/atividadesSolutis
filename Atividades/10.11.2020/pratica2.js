/*Faça um programa que leia uma lista A e uma
lista B de inteiros de 10 posições. Depois gere
uma lista C que será o produto dos valores
correspondentes dos vetores A e B.*/

//import { createArray } from "createArray.js"

//Comentar se necessário.
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