function inventory(data) {

    let myInv = [];

data.forEach(heroes => {
    let [name, level, items] = heroes.split(" / ");
    let hero = {
        name: name, 
        level: Number(level),
        items: items
    }
    myInv.push(hero);
});
let sortedResult = myInv.sort((a, b) => (a.level > b.level) ? 1 : (a.level < b.level) ? -1 : 0);

sortedResult.forEach(heroes => {
    console.log(`Hero: ${heroes.name}`);
    console.log(`level => ${heroes.level}`);
    console.log(`items => ${heroes.items}`);
})
}
