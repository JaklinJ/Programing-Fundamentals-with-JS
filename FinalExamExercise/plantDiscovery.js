function plantDiscovery(data){
  
  let numberOfPlants = Number(data.shift());
  let plants = {};
  
 for (let i =0; i<numberOfPlants; i++) {
   let line = data.shift();
   let [curPlant, rarity] = line.split("<->");
   if(!plants.hasOwnProperty(curPlant)) {
   
     plants[curPlant] = 
     {rarity, 
       "rating": 0,
       "count": 0};
   } else {
     plants[curPlant]= rarity;
   }
 }
 
  let token = data.shift();
  
  while (token !== "Exhibition") {
    let [command, token1] = token.split(": ");
    let [plant,two] = token1.split(" - ");
   if (plants.hasOwnProperty(plant)){
    switch (command) {
      case "Rate":
      	let rating = Number(two);
      	
      plants[plant].rating += rating;
      plants[plant].count += 1;
      break;
      case "Update":
        let newRarity = Number(two)
                      plants[plant].rarity= newRarity;
         
      break;
      case "Reset":
          plants[plant].rating =0;
          plants[plant].count = 0;
       
      break;
    } 
  }else {
    console.log("error");
  }
    token = data.shift();
  }
  
  let plantsArr = Object.entries(plants);
  
  console.log("Plants for the exhibition:");
  
  for (let [key, value] of plantsArr) {
    let averageRating = value.rating / value.count;
    if(!isNaN(averageRating)) {
    console.log(`- ${key}; Rarity: ${value.rarity}; Rating: ${averageRating.toFixed(2)}`);
} else {
console.log(`- ${key}; Rarity: ${value.rarity}; Rating: 0.00`);
}
  }
}
