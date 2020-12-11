/*Crie duas listas de 10 posições e crie uma
terceira lista contendo, nas posições pares os
valores do primeira lista e nas posições
impares os valores do segunda lista.*/

//import { createArray } from "createArray.js"

//Comentar se necessário.
function createArray(){
    return new Array(10).fill(null).map(() => Math.floor(Math.random() * 30));
}

const listaA = createArray();
const listaB = createArray();
const listaC = new Array(10).fill(null).map((current, index) => index%2 == 0 ? 
    current = listaB[index] : current = listaA[index]);

console.log(listaA);
console.log(listaB);
console.log(listaC);