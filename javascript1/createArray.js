export default function createArray(){
    const values = [];
    for (let i=0; i<10; i++){
        values[i] = Math.floor(Math.random() * 30);
    }
    return values;
}