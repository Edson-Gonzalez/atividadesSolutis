(async ()=>{
    fetch = require("node-fetch");
    const availableTypes = ['anime', 'manga', 'people', 'characters'];
    const availableNames = ['anime', 'manga', 'person', 'character'];
    let auxInt = Math.floor(Math.random() * 3);
    let itemType = availableTypes[auxInt];
    let itemName = availableNames[auxInt];
    let itemRank = Math.floor(Math.random() * 50)+1;
    
    console.log("Searching for the " + itemName + " ranked " + itemRank + " on MAL");
    const rankingBuscado = async (type, rank) => {
        let anime;
        await fetch(`https://api.jikan.moe/v3/top/${type}`)
            .then(response => response.json())
            .then(data => anime = data.top[`${--rank}`].title)
            .catch(console.error);
        return anime;
    }
    ranking = await rankingBuscado(itemType, itemRank);
    console.log("The " + itemName + " ranked " + itemRank + " on MyAnimeList is: ", ranking);
})();