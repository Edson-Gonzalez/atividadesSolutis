function createArray(){
    return new Array(10).fill(null).map(() => Math.floor(Math.random() * 30));
}