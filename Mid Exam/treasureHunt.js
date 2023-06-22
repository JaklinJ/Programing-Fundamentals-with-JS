function treasureHunt(arr) {

    let treasure = arr.shift().split("|");

    for (let i = 0; i < arr.length; i++) {
        let currentCommand = arr[i];

        if (currentCommand.includes("Yohoho!")) {
            break;
        }

        let newArr = currentCommand.split(" ");
        let command = newArr.shift();

        switch (command) {
            case "Loot":
                for (let i = 0; i < newArr.length; i++) {
                    let item = newArr[i];
                    if (!treasure.includes(item)) {
                        treasure.unshift(item);
                    }
                }
                break;
            case "Drop":
                let index = Number(newArr[0]);
                if (index < treasure.length && index >= 0) {
                    let currItem = treasure.splice(index, 1);
                    
                    treasure.push(currItem);
                }
                break;
            case "Steal":
                let deleteCount = Number(newArr[0]);
                if (deleteCount < treasure.length) {

                    let stolenItems = treasure.splice(-deleteCount);
                    console.log(stolenItems.join(", "));

                } else {
                   let stolen = treasure.splice(-treasure.length-1);
                    console.log(stolen.join(", "));
                }
                break;
        }
    }
    if (treasure.length > 0) {
        let length = 0;
        for (let i = 0; i <treasure.length; i++) {
            let lengthOfWord = treasure[i].length;
            length += lengthOfWord;
        }
        let avgLength = length / treasure.length;
        console.log(`Average treasure gain: ${avgLength.toFixed(2)} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.");
    }

}
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"]);
