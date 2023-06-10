function distinctArray(arr) {

let newArr = [];

for (const number of arr) {
    if (!newArr.includes(number)) {
        newArr.push(number);
    }
}
return newArr.join(" ")
}
