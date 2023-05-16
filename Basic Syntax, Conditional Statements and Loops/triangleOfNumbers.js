function triangleOfNumbers(number) {
    let num = number;
    let res = "";
    for (let row = 1; row <= num; row++) {
        for (let col = 1; col <= row; col++) {
            res += row +  " ";
        }
        console.log(res);
        res = "";
       
    }
}
triangleOfNumbers(5)