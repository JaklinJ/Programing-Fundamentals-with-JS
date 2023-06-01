function tseamAcc(input) {

let games = input[0].split(" ");


for (let i = 1; i < input.length-1; i++) {
let currentComand = input[i].split(" ");
let command = currentComand[0];
let game = currentComand[1];

if (command === "Play!") {
    break;
}

 if (command === "Install") {
   for (let j = 0; j < games.length; j++) {
    if (!games.includes(game)) {
        games.push(game);
    }
   }
} else if (command === "Uninstall") {
   for (let j = 0; j < games.length; j++) {
    if (games[j] === game) {
        let x = games.splice(j,1);
    }
   }
} else if (command === "Update") {
    for (let j = 0; j < games.length; j++) {
        if (games[j]===(game)) {
            let x = games.splice(j,1);
            games.push(game);
        }
    }
} else if (command === "Expansion") {
    let expasion = game.split('-');
    let newGame = expasion[0];
    
    for (let j = 0; j< games.length; j++) {

        if (games[j]===(newGame)) {
           let expandedGame = expasion.join(':');
           games.splice(j + 1, 0, expandedGame);
           break;
    }
}
 
  //cs cs:go lol diablo
}
}

console.log(games.join(" "))

}
