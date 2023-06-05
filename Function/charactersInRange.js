function charactersInRange(charOne, charTwo) {

let smallerChar = Math.min(charOne.charCodeAt(), charTwo.charCodeAt());
let biggerChar = Math.max(charOne.charCodeAt(), charTwo.charCodeAt());
let charArr = [];

for (let i = smallerChar + 1; i < biggerChar; i ++) {
    let currentChar = String.fromCharCode(i);
    charArr.push(currentChar);
}
console.log(charArr.join(" "));

}
