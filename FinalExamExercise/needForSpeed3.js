function needForSpeed3(data) {

let numberOfCars = +data.shift();
let carsGarage = {};
 for (let i = 0; i < numberOfCars; i++) {
    let [cars, mileage, fuels] = data.shift().split("|");
    mileage = Number(mileage);
    fuels = Number(fuels);
    carsGarage[cars] = {mileage , fuels};
 }
 let token = data.shift();
 while (token !== 'Stop') {
    let [comand, car, distance, fuel] = token.split(" : ");
    fuel = Number(fuel);
    distance = Number(distance);
    switch (comand) {
        case "Drive":
        let carFuel = Number(carsGarage[car].fuels);
        if (fuel > carFuel) {
            console.log("Not enough fuel to make that ride");
        }else {
            carsGarage[car].mileage += distance;
            carsGarage[car].fuels -= fuel;
            console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
        }
        if (carsGarage[car].mileage >= 100000) {
            console.log(`Time to sell the ${car}!`)
            delete carsGarage[car];
        }
        break;
        case "Refuel":
        let fuelTank = Number(carsGarage[car].fuels);
        let fuelToFill = Number(distance);
        let result = fuelTank + fuelToFill;
        if (result > 75) {
            result = 75;
            let fuelUsed = 75-fuelTank;
            carsGarage[car].fuels = result;
            console.log(`${car} refueled with ${fuelUsed} liters`)
        } else {
            carsGarage[car].fuels = result;
            console.log(`${car} refueled with ${distance} liters`)
        }
        break;
        case "Revert":
        let carMileage = Number(carsGarage[car].mileage);
        let revertedMiles = carMileage - Number(distance);
        if (revertedMiles > 10000) {
            console.log(`${car} mileage decreased by ${distance} kilometers`)
            carsGarage[car].mileage = revertedMiles;
        } else {
            revertedMiles =  10000;
            carsGarage[car].mileage = revertedMiles;
        }
        break;
    }

    token = data.shift();
 }

    let resultArr = Object.entries(carsGarage);

    for (const [key,value] of resultArr) {
        console.log(`${key} -> Mileage: ${value.mileage} kms, Fuel in the tank: ${value.fuels} lt.`);
    }

}
