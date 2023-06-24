function storeProvision(localStoreInventory, order) {

    let storeStorage = {};

for (let i = 0; i<localStoreInventory.length; i+=2) {
    let product = localStoreInventory[i];
    storeStorage[product] = Number(localStoreInventory[i+1]);
}

for (let i = 0; i<order.length; i+=2) {
    let product = order[i];
    if (!storeStorage.hasOwnProperty(product)) {
        storeStorage[product] = 0;
    }
    storeStorage[product] += Number(order[i+1]);
}

for (const product in storeStorage) {
    console.log(`${product} -> ${storeStorage[product]}`);
}

}
