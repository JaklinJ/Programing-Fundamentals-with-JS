function replaceRepeatingChars(text) {

let result = text[0];
let textLength = text.length;

for (let i = 1; i< textLength; i++) {
    let currEl = text[i];
    let prevEl = text[i-1];

    if (currEl !== prevEl) {
        result += currEl;
    } 
}

console.log(result);

}
