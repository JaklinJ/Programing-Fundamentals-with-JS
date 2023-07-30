function decryptingCommands(data) {

let message = data.shift();

let token = data.shift();

while (token !== "Finish") {

    let [command, ...rest] = token.split(" ");
    
    switch (command) {
        case "Replace":
            let curChar = rest[0];
            let newChar = rest[1];
            
            message = message.split(curChar).join(newChar);
            console.log(message)
        break;
        case "Cut":
            let startIndex = Number(rest[0]);
            let endIndex = Number(rest[1]);

            if (startIndex >= 0 && startIndex < message.length && endIndex > 0 && endIndex < message.length) {
                let cutedPiece = message.substring(startIndex , endIndex + 1);
                message = message.replace(cutedPiece, "");
                console.log(message);
            } else {
                console.log("Invalid indices!");
            }
        break;
        case "Make":
            let casing = rest[0];
            if (casing === "Upper") {
                message = message.toUpperCase();
                console.log(message);
            } else {
                message = message.toLowerCase();
                console.log(message);
            }
        break;
        case "Check":
            let string = rest[0];

            if (message.includes(string)) {
                console.log(`Message contains ${string}`);
            } else {
                console.log(`Message doesn't contain ${string}`);
            }
        break;
        case "Sum":
            let start = Number(rest[0]);
            let end = Number(rest[1]);
            if (start >= 0 && start < message.length && end > 0 && end < message.length) {
            let subsPiece = message.substring(start, end+1);
                
            let sum = 0;
            for (let char of subsPiece) {
                sum += char.charCodeAt()
            }
            console.log(sum);
        } else {
            console.log("Invalid indices!");
        }
        break;
    }

    token = data.shift();
}

}
