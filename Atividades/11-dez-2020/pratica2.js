(async ()=>{
    fetch = require("node-fetch");
    console.log("Buscando CEP");
    const cepBuscado = async (parametro) => {
        let cep;
        await fetch(`https://viacep.com.br/ws/${parametro}/json/`)
            .then(response => response.json())
            .then(data => {cep = data.cep
                /*console.log("CEP encontrado: ", cep)*/})
            .catch(console.error);
        return cep;
    }
    userCep = await cepBuscado("13845373");
    console.log("CEP buscado");
    console.log("CEP encontrado: ", userCep);
})();