function valueOfAString(data) {

let text = data[0].split("");
let typeOfLetters = data[1];
let sum = 0;

switch(typeOfLetters) {
    case "LOWERCASE":
        for (let i = 0; i < text.length; i++) {
            let currentLetter = text[i];
            if (currentLetter.charCodeAt(0) > 96 && currentLetter.charCodeAt(0) < 123) {
                sum += currentLetter.charCodeAt(0);
            }
        }
    break;
    case "UPPERCASE": 
    for (let i = 0; i < text.length; i++) {
        let currentLetter = text[i];
        if (currentLetter.charCodeAt(0) > 64 && currentLetter.charCodeAt(0) < 91) {
            sum += currentLetter.charCodeAt(0);
        }
    }
break;
}

    console.log(`The total sum is: ${sum}`);

}
