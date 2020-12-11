function createArray(){
    return new Array(10).fill(null).map(() => Math.floor(Math.random() * 30));
}

var yes = 0, no = 0;

const lista = createArray();

lista.map((current) => 
current>10 && current<20 ? yes++ : no++ )

console.log(lista);
console.log("Estão: " + yes);