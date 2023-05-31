function rotateArray(input) {
let newArr = input;
let rotationIndex = input[input.length - 1];
newArr.pop(newArr[newArr.length-1])

for (let i = 1; i <= rotationIndex; i++) {
    
    let currentNum = newArr[newArr.length-1];
    
    newArr.unshift(currentNum);
    newArr.pop(newArr[newArr.length-1]);
    


}
   console.log(newArr.join(" "));
}
