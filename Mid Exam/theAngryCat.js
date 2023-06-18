function theAngryCat(arr, entry, priceRange) {

let rigthSum = 0;
let positionRight = "Right";
for (let i = entry+1; i < arr.length; i++) {
    let entryPointItem = Number(arr[entry]);
    let curentPrice = Number(arr[i]);
    switch (priceRange) {
        case "cheap" :
            if (curentPrice < entryPointItem) {
                rigthSum += curentPrice;
            }
            break;
        case "expensive":
            if (curentPrice >= entryPointItem) {
                rigthSum += curentPrice;
            }
            break;
    }
}
let leftSum = 0;
let positionLeft = "Left";

for (let j = entry-1; j >= 0; j--) {
    let entryPrice = Number(arr[entry]);
    let curentPriceRight = Number(arr[j]);
    
    switch (priceRange) {
        case "cheap" :
            if (curentPriceRight < entryPrice) {
                leftSum += curentPriceRight;
            }
            break;
        case "expensive":
            if (curentPriceRight >= entryPrice) {
                leftSum += curentPriceRight;
            }
            break;
    
}
 
}

if (leftSum >= rigthSum) {
    console.log(`${positionLeft} - ${leftSum}`);
 } else {
    console.log(`${positionRight} - ${rigthSum}`);
 }

}
theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
    7,
    "expensive")
