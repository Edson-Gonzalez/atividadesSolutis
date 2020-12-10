/*Crie um lista com 10 valores e escreva 
quantos desses valores lidos estão no intervalo [10,20]
(inlcuindo os valores 10 e 20 no intervalo) e
quantos deles estão fora deste intervalo.*/

//import { createArray } from "createArray.js"

//Comentar se necessário.
function createArray(){
    const values = [];
    for (let i=0; i<10; i++){
        values[i] = Math.floor(Math.random() * 30);
    }
    return values;
}

const lista = createArray();

var yes=0, no=0;

for (let i=0; i<10; i++){
    if (lista[i]>10 && lista[i]<20){
        yes++;
    }else{
        no++;
    }
}
console.log(lista);
console.log("Estão: " + yes);