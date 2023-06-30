function storage(data) {

    let list = new Map();

    for (const line of data) {
        let tokens = line.split(" ");
        let product = tokens[0];
        let quantity = Number(tokens[1]);
        
        if (!list.has(product)) {
            list.set(product, quantity);
        } else {
            let currentQuantity = list.get(product);
            let newQuantity = currentQuantity + quantity;
            list.set(product, newQuantity);
        }
    }

    for (const [key, value] of list) {
        console.log(`${key} -> ${value}`);
    }

}
