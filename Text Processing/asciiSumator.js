function asciiSumator(data) {

let startChar = data[0];
let endChar = data[1];

if (startChar.charCodeAt(0) > endChar.charCodeAt(0)) {
    startChar = data[1];
    endChar = data[0];
}
let text = data.pop().split("");

let sum = 0;

for(let i = 0; i< text.length; i++) {
    let currentChar = text[i];

    if (currentChar.charCodeAt(0) > startChar.charCodeAt(0) && currentChar.charCodeAt(0) < endChar.charCodeAt(0)) {
        sum += currentChar.charCodeAt(0);
    }
}

    console.log(sum);

}
