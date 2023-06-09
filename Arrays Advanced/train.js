function train(input) {

let arr = input
.shift()
.split(" ")
.map(Number);

let maxCapacity = Number(input.shift());

for (let i = 0; i < input.length; i++) {

    let newArr = input[i].split(" ");
    let comand = newArr[0];
    let value = newArr[1];

    if (newArr.length === 2 && comand === "Add") {
        arr.push(value);
    } else {
        let passengers = Number(newArr[0]);
    

    for (let j = 0 ; j < arr.length; j++) {
        if (passengers + arr[j] <= maxCapacity) {
            arr[j] += passengers;
            break;
        }
    }
}
}
console.log(arr.join(" "));
}
