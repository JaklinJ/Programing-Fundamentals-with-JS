function movingTarget(input) {


let targets = input
.shift()
.split(" ")
.map(Number);

for (let i = 0; i < input.length; i++) {

    let commands = input[i].split(" ");
    let comand = commands[0];
    let index = Number(commands[1]);
    let value = Number(commands[2]);

    switch(comand) {
        case "Shoot": 
        if (targets.length >= index) {
            let result = targets[index] - value;
            if (result <= 0) {
                targets.splice(index, 1);
            } else {
                targets[index] = result;
            }
        }
        break;
        case "Add": 
        if (index >= 0 && targets.length > index) {
            targets.splice(index, 0, value);
        } else {
            console.log("Invalid placement!");
        }
        break;
        case "Strike": 
        if (index >= 0 && index < targets.length) {
            if (index - value >= 0 && index + value < targets.length) {
                targets.splice(index - power, power + power + 1);
            } else {
                console.log("Strike missed!");
            }
        }
        break;
    }

}
 console.log(targets.join("|"));

}
movingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"]);