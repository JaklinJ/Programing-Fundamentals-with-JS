function messageDecripter(data) {

let numberOfInputs = Number(data.shift());

for (let i = 0; i < numberOfInputs; i++) {
    let currentLine = data[i];
   
    let pattern = /^([%$])(?<tag>[A-Z][a-z]{2,})\1:\s\[(?<num1>\d+)\]\|\[(?<num2>\d+)\]\|\[(?<num3>\d+)\]\|$/g;

    let match = pattern.exec(currentLine);
    if (match) {
        let message = String.fromCharCode(match.groups.num1, match.groups.num2, match.groups.num3);
        console.log(`${match.groups.tag}: ${message}`);
    } else {
        console.log("Valid message not found!");
    }
}

}
