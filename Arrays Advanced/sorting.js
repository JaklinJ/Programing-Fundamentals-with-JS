function sorting(input) {

let sortedArr = input.sort((a, b) => b - a);
let result = [];
let sortedLength = sortedArr.length;

for(let i = 0; i < sortedLength; i++) {
    let biggestNum = sortedArr.shift();
    let smallestNum = sortedArr.pop();

    result.push(biggestNum);
    result.push(smallestNum);
}

console.log(result.join(" "));

}
