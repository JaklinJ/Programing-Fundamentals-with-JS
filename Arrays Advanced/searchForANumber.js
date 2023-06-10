function searchForANumber(numbersArr, commandsArr) {

let elToTake = commandsArr[0];
let elToDelete = commandsArr[1];
let searchedNum = commandsArr[2];

let newArr = numbersArr.slice(0,elToTake);
newArr.splice(0,elToDelete);

let numberCounter = newArr.filter(el => el === searchedNum).length;

console.log(`Number ${searchedNum} occurs ${numberCounter} times.`);


}
