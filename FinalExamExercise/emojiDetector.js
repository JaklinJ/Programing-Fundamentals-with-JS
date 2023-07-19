function emojiDetector(data) {

let numbersTest = /\d/g;
let coolThreshold = 1;

let matchedNumbers = numbersTest.exec(data);
while (matchedNumbers) {
    let number = matchedNumbers[0];

    coolThreshold *= number;

    matchedNumbers = numbersTest.exec(data);
}
let allMatchedEmojis = [];
let coolEmojis = [];

let pattern = /([:]{2}|[*]{2})(?<emoji>[A-Z][a-z]{2,})\1/g;

let match = pattern.exec(data);

while (match) {
    let matchEmoji = match[0];
    let emoji = match.groups.emoji;
    allMatchedEmojis.push(emoji);
    let sum = 0;
    
    for (const char of emoji) {
        let charAt = char.charCodeAt(0);
        sum += charAt;
    }
   
    if (sum >= coolThreshold) {
    coolEmojis.push(matchEmoji);
   }
    match = pattern.exec(data);
}

    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${allMatchedEmojis.length} emojis found in the text. The cool ones are:`)
    for (const el of coolEmojis) {
        console.log(`${el}`);
    }

}
