/*Crie um lista com 10 valores e escreva 
quantos desses valores lidos estão no intervalo [10,20]
(inlcuindo os valores 10 e 20 no intervalo) e
quantos deles estão fora deste intervalo.*/

//import { createArray } from "createArray.js"

//Comentar se necessário.
function createArray(){
    return new Array(10).fill(null).map(() => Math.floor(Math.random() * 30));
}

var yes = 0, no = 0;

const lista = createArray();

lista.map((current) => 
current>10 && current<20 ? yes++ : no++ )

console.log(lista);
console.log("Estão: " + yes);