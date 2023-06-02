function orders(item, count) {

let price = 0;

switch (item) {
    case "coffee": price = count * 1.50; break;
    case "coke": price = count * 1.40; break; 
    case "water": price = count * 1.00; break;
    case "snacks": price = count * 2.00; break;
}
console.log(price.toFixed(2));
}
