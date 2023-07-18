function fancyBarcodes(data) {

let numberOfBarcodes = Number(data.shift());

for (let i = 0 ; i < data.length; i++) {
    let barcode = data[i];
    let test = /(@[#]+)(?<product>[A-Z][A-Za-z0-9]{4,})([A-Z]@#+)/g;

    let match = test.exec(barcode);
    if(match) {
        let product = match[2];

        let patterNumbers = /\d/g;

        let matchNumbers = patterNumbers.exec(product);
        let isWithNumber = false;
        let result = [];
        if (matchNumbers) {
            
        while (matchNumbers) {
            isWithNumber = true;
            result.push(matchNumbers[0])

            matchNumbers = patterNumbers.exec(product);
        }
        } 
        if (isWithNumber) {
            console.log(`Product group: ${result.join("")}`)
        }
        else {
            console.log(`Product group: 00`);
        }
        
    } else {
        console.log(`Invalid barcode`)
    }

}

}
