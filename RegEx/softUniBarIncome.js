function softUniBarIncome(data) {
    
let pattern = /\%(?<person>[A-Z][a-z]+)\%[^!$%.]*\<(?<product>\w+)\>[^!$%.]*\|(?<count>\d+)\|[^!$%.0-9]*(?<price>[\d]+.?\d*)\$/g;

    let sum = 0;
    let line = data.shift();
    while (line !== 'end of shift') {

        let match = [...line.matchAll(pattern)];

        for (let el of match) {
            let endPrice = Number(el.groups.count) * Number(el.groups.price);

            sum += endPrice;
            console.log(`${el.groups.person}: ${el.groups.product} - ${endPrice.toFixed(2)}`);
        }


        line = data.shift();
    }

    console.log(`Total income: ${sum.toFixed(2)}`);

}
