function countStringOccurences(text, word) {

let count = 0;

let result = text.split(" ");
for (const words of result) {
    if (words === word) {
        count++
    }
}
console.log(count);
}
