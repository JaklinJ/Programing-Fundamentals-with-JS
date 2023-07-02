function wordsTracker(data) {

let words = data.shift().split(" ");
let result = {};

words.forEach(el => {
    let word = el;
    result[word] = 0;

    data.forEach(element => {
        let currentWord = element;

        if (word === currentWord) {
            result[word] += 1;
        }
    });
});

let sorted = Object.entries(result);
sorted.sort((a,b) => b[1]- a[1]);

for (const [key, value] of sorted) {
    console.log(`${key} - ${value}`);
}

}
