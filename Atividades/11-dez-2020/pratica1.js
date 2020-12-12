function fazRequisicao() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Promise resolvida");
            /*reject("promise");
            throw new Error("Deu erro");
            */
        },5000);
    });
};
fazRequisicao()
    .then(console.log)
    .catch(console.log)
    .finally(console.log("Promisse iniciada ..."))