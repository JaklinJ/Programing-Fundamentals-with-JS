function rounding(num, precision) {
    let number = num;
    let curPrecision = precision;

    if (curPrecision <= 15) {
        let result = number.toFixed(curPrecision);
        console.log(parseFloat(result));
    } else {
        curPrecision = 15;
        let result = number.toFixed(curPrecision);
        console.log(parseFloat(result));
    }

    
}
rounding(10.5,3 )