function cutAndReverse(line) {

let halfString = line.length/2;
let lineArr = line.split("");

let leftSide = [];
let rightSide = [];

for(let i = halfString - 1; i >= 0; i--) {
    let currentChar = line[i];
    leftSide.push(currentChar);
}

for(let i = line.length - 1; i >= halfString; i--) {
    let currentChar = line[i];
    rightSide.push(currentChar);
}

console.log(leftSide.join(""));
console.log(rightSide.join(""));
}
