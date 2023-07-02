function piccolo(data) {

let parkingLot = {};

data.forEach(line => {
    let [direction, carNum] = line.split(", ");
    if (!parkingLot.hasOwnProperty(carNum)) {
        parkingLot[carNum] = direction;
    } else {
        parkingLot[carNum] = direction;
    }
});

let result = [];

for (const key in parkingLot) {
    if (parkingLot[key] === "IN") {
        result.push(key);
    }
}
 result.sort((a,b) => a.localeCompare(b));

 if(result.length >= 1) {
    console.log(result.join("\n"));
 } else {
    console.log(`Parking Lot is Empty`);
 }

}
