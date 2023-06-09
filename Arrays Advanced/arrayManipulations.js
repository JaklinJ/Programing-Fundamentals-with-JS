function arrayManipulations(input) {

let arr = input[0].split(' ');
let newArr = arr;

for (let i = 1; i < input.length; i++) {
    let currentArr = input[i].split(" ");
   for (let j = 0; j < currentArr.length; j++) {
    if (currentArr[j] === 'Add') {
        newArr.push(currentArr[j+1]);
    } else if (currentArr[j] === 'Remove') {
     newArr = newArr.filter(el => el !== currentArr[1])
    } else if (currentArr[j] === 'RemoveAt') {
        newArr.splice(currentArr[j+1],1);
    } else if (currentArr[j] === 'Insert') {
        newArr.splice(currentArr[2],0,currentArr[1]);
    }
   }
}

console.log(newArr.join(" "))

}
