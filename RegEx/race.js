function race(data) {

let participants = data.shift().split(", ");

let participantsObj = {};

for (const person of participants) {
    participantsObj[person] = 0;
}

let command = data.shift();

while (command !== 'end of race') {

    let lettersTest = /[A-Za-z]/g;
    let numbersTest = /\d/g;

    let matchLetters = command.match(lettersTest);
    matchLetters = matchLetters.join("");
    let matchDigits = command.match(numbersTest);
    matchDigits = matchDigits.map(Number).reduce((a,b) => a + b);

    if (participantsObj.hasOwnProperty(matchLetters)) {
        participantsObj[matchLetters] += matchDigits;
    }


    command = data.shift();
}

let sortedObj = Object.entries(participantsObj);
sortedObj.sort((a,b) => b[1] - a[1]);

console.log(`1st place: ${sortedObj[0][0]}`);
console.log(`2nd place: ${sortedObj[1][0]}`);
console.log(`3rd place: ${sortedObj[2][0]}`);

}
