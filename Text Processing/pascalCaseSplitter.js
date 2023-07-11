function pascalCaseSplitter(text) {

let textArr = text.split("");
let result = [];

let word = "";

for (let i = 0; i < textArr.length; i++) {
   let currentChar = text[i];
   let nextChar = text[i+1];
    if (currentChar.charCodeAt(0) > 40 && currentChar.charCodeAt(0) < 91) {
        word = currentChar;
    } else if (currentChar.charCodeAt(0) > 96 && currentChar.charCodeAt(0) < 123) {
        word += currentChar;
    }
    if  (nextChar === undefined) {
        result.push(word);
        break;
    } else if(nextChar.charCodeAt(0) > 40 && nextChar.charCodeAt(0) < 91) {
        result.push(word);
    }
}

    console.log(result.join(", "));

}
