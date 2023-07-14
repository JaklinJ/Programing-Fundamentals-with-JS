function theImitationGame(data) {

let decriptedMessage = data.shift();

let token = data.shift().split("|");

while (!token.includes("Decode")) {
    let command = token[0];

    switch(command) {
        case "Move":
            let num = token[1];

            let letters = decriptedMessage.substr(0, num);
            decriptedMessage = decriptedMessage.replace(letters, '')
            decriptedMessage = decriptedMessage.concat(letters)
        break;
        case "Insert" :
            let index = Number(token[1]);
            let value = token[2];

            decriptedMessage = decriptedMessage.split('');
            decriptedMessage.splice(index,0,value);
            decriptedMessage = decriptedMessage.join('');
        break;
        case "ChangeAll" :
            let substring = token[1];
            let replacement = token[2];
            
            while (decriptedMessage.includes(substring)) {
                decriptedMessage = decriptedMessage.replace(substring, replacement);
            }
            
        break;
    }
    token = data.shift().split("|");
}

    console.log(`The decrypted message is: ${decriptedMessage}`);

}
