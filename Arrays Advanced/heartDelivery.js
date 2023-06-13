function heartDelivery(arr) {

let neighborhood = arr.shift().split("@").map(Number);
let lastPosition = 0;

for (let i = 0; i < arr.length; i++) {
    let currentCommand = arr[i].split(" ");
    let command = currentCommand[0];
    let power = Number(currentCommand[1]);



    if (command === "Jump") {
        lastPosition += power;
        if (lastPosition >= neighborhood.length) {
            lastPosition = 0;
        }

        if (neighborhood[lastPosition] === 0) {
            console.log(`Place ${lastPosition} already had Valentine's day.`);
        } else {
            neighborhood[lastPosition] -= 2;
            if (neighborhood[lastPosition] === 0) {
                console.log(`Place ${lastPosition} has Valentine's day.`);
            }
        }

}
}
console.log(`Cupid's last position was ${lastPosition}.`);
let count = neighborhood.filter(el => el === 0).length;
if (count === neighborhood.length) {
    console.log(`Mission was successful.`)
} else {
    let failed = neighborhood.filter(el => el !== 0).length;
    console.log(`Cupid has failed ${failed} places.`);
}

}
