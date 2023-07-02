function oddOccurrences(data) {

let result = {};

let wordsArr = data.split(" ");

wordsArr.forEach(element => {
    let currentWord = element.toLowerCase();
    if (!result.hasOwnProperty(currentWord)) {
        result[currentWord] = 1;
    } else {
        result[currentWord] += 1;
    }
});

let resultArr = [];

for (const key in result) {
    if (result[key] % 2 !== 0) {
        resultArr.push(key);
    }
}

console.log(resultArr.join(" "));


}
