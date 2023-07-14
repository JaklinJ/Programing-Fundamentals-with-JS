function furniture(data) {

let pattern = />>(?<item>\w+)<<(?<price>\d*\.?\d+)!(?<quantity>\d+)/;

console.log(`Bought furniture:`);

let totalMoney = 0;

for (const line of data) {
    let match = line.match(pattern);

     if (match) {
         let item = match.groups.item
         let price = +match.groups.price;
         let quantity = +match.groups.quantity;

         totalMoney += price * quantity;
         console.log(`${item}`);

     }
 }

     console.log(`Total money spend: ${totalMoney.toFixed(2)}`);

}
