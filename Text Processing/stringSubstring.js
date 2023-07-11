function stringSubstring(word, text) {

    let textArr = text.split(" ");
    let isFound = false;
    for (const words of textArr) {
        let currentWord = words.toLowerCase();
        if (currentWord === word.toLowerCase()) {
            isFound = true;
            break;
        }
    }
    if (!isFound) {
        console.log(`${word} not found!`);
    } else {
        console.log(word);
    }
}
