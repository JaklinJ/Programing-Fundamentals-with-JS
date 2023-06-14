function manOWar(arr) {

let pirateShip = arr.shift().split(">").map(Number);
let warship = arr.shift().split(">").map(Number);
let maxHealth = arr.shift();
let isSunkedWar = false;
let isSunkedPirate = false;

for (let i = 0; i < arr.length; i++) {
    let currentCommand = arr[i].split(" ");

    if (currentCommand.includes("Retire")) {
        break;
    }

    let command = currentCommand[0];
    
    switch (command) {
        case "Fire": 
        let index = Number(currentCommand[1]);
        let damageWarship = Number(currentCommand[2]);

        if (index < warship.length && index >= 0) {
            let damaged = warship.splice(index, 1);
            let resultOfDamage = damaged - damageWarship;

            if (resultOfDamage <= 0) {
                console.log("You won! The enemy ship has sunken.");
                isSunkedWar = true;
                break;
            } else {
                warship.splice(index,0,resultOfDamage);
            }
        }
        break;
        case "Defend": 
        let startIndex = Number(currentCommand[1]);
        let endIndex = Number(currentCommand[2]);
        let damagePirateship = Number(currentCommand[3]);

        let damagedPirate = 0;
        let resultOfDamPirate = 0;

        if (startIndex >= 0 && endIndex < pirateShip.length) {
            for (let i = startIndex; i < pirateShip.length; i++) {
                if (i > endIndex) {
                    break;
                }
                damagedPirate = pirateShip.splice(i,1);
                resultOfDamPirate = damagedPirate - damagePirateship;
                if (resultOfDamPirate <= 0) {
                    console.log("You lost! The pirate ship has sunken.");
                    isSunkedPirate = true;
                    break;
                } else {
                    pirateShip.splice(i, 0, resultOfDamPirate);
                }
                damagedPirate = 0;
                resultOfDamPirate = 0;
            }
        }
        break;
        case "Repair": 
        let indexOfRepair = Number(currentCommand[1]);
        let healthOfRepair = Number(currentCommand[2]);

        if (indexOfRepair >= 0 && indexOfRepair < pirateShip.length) {
            let repairingPlace = pirateShip.splice(indexOfRepair,1).map(Number);
            let healed = Number(repairingPlace) + Number(healthOfRepair);

            if (healed > maxHealth) {
                healed = maxHealth;
                pirateShip.splice(indexOfRepair, 0 , healed);

            } else {
                pirateShip.splice(indexOfRepair, 0 , healed);
            }
        }
        break;
        case "Status":
            let count = 0;
            for (let i = 0; i < pirateShip.length; i++) {
                let currentSection = Number(pirateShip[i]);
                let health = (currentSection/maxHealth) * 100;
                if (health < 20) {
                    count++;
                }
            }
            console.log(`${count} sections need repair.`);
            break;
    }
    
}

    if (!isSunkedPirate && !isSunkedWar) {
        let sumPirate = 0;
        for (let i = 0; i < pirateShip.length; i++) {
            let curent = Number(pirateShip[i]);
            sumPirate += curent;
        }
        let sumWar = 0;
        for (let i = 0; i < warship.length; i++) {
            let curentWar = Number(warship[i]);
            sumWar += curentWar;
        }
        console.log(`Pirate ship status: ${sumPirate} \nWarship status: ${sumWar}`);
    }

}
