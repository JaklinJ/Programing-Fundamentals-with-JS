function listOfProducts(products) {

let sortedProducts = products.sort();

for (let i = 0; i < sortedProducts.length; i++) {
    let curentProduct = sortedProducts[i];
    console.log(`${i+1}.${curentProduct}`);
}

}
