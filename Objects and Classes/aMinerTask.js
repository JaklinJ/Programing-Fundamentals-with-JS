function aMinerTask(data) {

let mineStorage = {};

for(let i = 0; i < data.length; i+=2) {
    let resource = data[i];
    let quantity = data[i+1];

    mineStorage[resource] = quantity;
}

for (const key in mineStorage) {
    console.log(`${key} -> ${mineStorage[key]}`)
    }
}
