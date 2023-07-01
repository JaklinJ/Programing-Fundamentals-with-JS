function wordOccurrence(data) {

    let result = {};

data.forEach(element => {
    let word = element;
    if (!result.hasOwnProperty(word)) {
        
        result[word] = 1;
    } else {
        result[word] += 1;
    }
});

    let sorted = Object.entries(result);
    sorted.sort((a,b) => b[1] - a[1]);
    

    for (const [key, value] of sorted) {
        console.log(`${key} -> ${value} times`);
    }

}
