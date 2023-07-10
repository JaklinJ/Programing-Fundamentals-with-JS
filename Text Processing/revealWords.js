function revealWords(words, text) {
let result = "";
words = words.split(", ")
for (const word of words) {
    if(text.includes("*".repeat(word.length))) {
        result = text.replace("*".repeat(word.length), word);
        text = result;
    }
}
console.log(result);
}
