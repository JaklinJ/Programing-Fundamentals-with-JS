function modernTimesOfHashTag(text) {

let result = [];

let textArr = text.split(" ");
let myChar = '#';
let isWithNumbers = false;

for (let word of textArr) {
    isWithNumbers = false;
    if(word[0] === myChar && word.length > 1) {
        
        for (let i = 1; i < word.length; i++) {
            let wordOfCycle = word[i].toUpperCase();
            if (wordOfCycle.charCodeAt(0) < 65 || wordOfCycle.charCodeAt(0) > 90) {
                isWithNumbers = true;
                break;
            } 
        }
        if (!isWithNumbers) {
            word = word.substring(1, word.length);
            result.push(word);
        }
       
    }
}
console.log(result.join("\n"));
}
