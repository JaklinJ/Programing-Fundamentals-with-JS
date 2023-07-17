function mirrorWords(data) {

let pattern = /([#@])(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g;

let match = pattern.exec(data);
let isFoundValidPairs = false;

let validPairs = [];
let result = [];

while (match) {
    let wordOne = match.groups.wordOne;
    let wordTwo = match.groups.wordTwo;

    validPairs.push(`${wordOne} + ${wordTwo}`);

    let reversedWordTwo = wordTwo.split("").reverse().join("");
   
    if (wordOne === reversedWordTwo) {
        result.push(`${wordOne} <=> ${wordTwo}`)
    }

    match = pattern.exec(data);
}

    if (validPairs.length > 0) {
        console.log(`${validPairs.length} word pairs found!`);
    } else {
        console.log('No word pairs found!');
    }
    if (result.length > 0) {
        console.log("The mirror words are:");
        console.log(result.join(", "))
    }else {
        console.log("No mirror words!");
    }

}
