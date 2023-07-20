function pirates(data) {

let token = data.shift();

let cities = {};

while (token !== "Sail") {
    let [city, population, gold] = token.split("||");
    population = Number(population);
    gold = Number(gold);
    if (!cities.hasOwnProperty(city)) {
        cities[city] = {population, gold};
    } else {
        cities[city].population += population;
        cities[city].gold += gold;
    }

    token = data.shift();
}

   let tokens = data.shift();

   while (tokens !== "End") {
    let [command, one, two , three] = tokens.split("=>");

    switch (command) {
        case "Plunder":
            let town = one;
            let peoplePlunder = Number(two);
            let goldPlunder = Number(three);

            console.log(`${town} plundered! ${goldPlunder} gold stolen, ${peoplePlunder} citizens killed.`);

            cities[town].population -= peoplePlunder;
            cities[town].gold -= goldPlunder;

            if (cities[town].population <= 0 || cities[town].gold <= 0) {
                delete cities[town];
                console.log(`${town} has been wiped off the map!`);
            }
        break;
        case "Prosper":
            let townProsper = one;
            let goldProsper = Number(two);

            if (goldProsper < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                cities[townProsper].gold += goldProsper;
                console.log(`${goldProsper} gold added to the city treasury. ${townProsper} now has ${cities[townProsper].gold} gold.`);
            }

        break;
    }


    tokens = data.shift();
   }

   let citiesArr = Object.entries(cities);
   if (citiesArr.length > 0) {
    console.log(`Ahoy, Captain! There are ${citiesArr.length} wealthy settlements to go to:`);
    for (const [key, value] of citiesArr) {
        console.log(`${key} -> Population: ${value.population} citizens, Gold: ${value.gold} kg`);
    }
   } else {
    console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
   }
  

}
