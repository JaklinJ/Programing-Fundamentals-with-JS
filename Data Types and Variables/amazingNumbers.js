function amazingNumbers(num) {
    let numToString = num.toString();
    let sum = 0;
    let isAmazing = false;
    for (let i = 0; i < numToString.length; i++) {
        sum += Number(numToString[i]);
    }
    let sumToString = sum.toString();
    
    for (let i = 0; i < sumToString.length; i++) {
      if (sumToString[i] === '9') {
        isAmazing = true;
        break;
      }
    }
    if (isAmazing) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}
