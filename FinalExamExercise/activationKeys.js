function activationKeys(data) {

let rawActivationKey = data.shift();

let token = data.shift();

while (token !== "Generate") {
    let [command, token1, token2, token3] = token.split(">>>");

    switch (command) {
        case "Contains": 
            let substring = token1;

            if (rawActivationKey.includes(substring)) {
                console.log(`${rawActivationKey} contains ${substring}`);
            } else {
                console.log("Substring not found!");
            }
        break;
        case "Flip":
            let cases = token1;
            let startIndex = Number(token2);
            let endIndex = Number(token3);

            let pieceToChange = rawActivationKey.substring(startIndex, endIndex);

            if (cases === "Upper") {
                let changedPiece = pieceToChange.toUpperCase();

               rawActivationKey = rawActivationKey.replace(pieceToChange, changedPiece);

            } else {
                let changedPiece = pieceToChange.toLowerCase();

                rawActivationKey = rawActivationKey.replace(pieceToChange, changedPiece);
            }
            console.log(rawActivationKey);
        break;
        case "Slice":
            let start = Number(token1);
            let end = Number(token2);

            let deletingPiece = rawActivationKey.substring(start, end);

            rawActivationKey = rawActivationKey.replace(deletingPiece, "");
            
            console.log(rawActivationKey);
        break;
    }

    token = data.shift();
}

    console.log(`Your activation key is: ${rawActivationKey}`);

}
