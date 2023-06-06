function nXNMatrix(num) {

    function rowGenerator() {
        let res = '';
        for (let j = 1; j <= num; j++) {

            res += num + " ";
        }
        return res;
    }

    for (let i = 1; i <= num; i++) {
        console.log(rowGenerator());
    }
    
}
