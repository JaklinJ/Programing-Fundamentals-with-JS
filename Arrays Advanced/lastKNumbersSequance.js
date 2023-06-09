function lastKNumbersSequance(n, k) {

    let arr = [1, 1];
    let count = 3;

    while (count <= n) {
        count++;
        let sumArr = arr.slice(-k);
        let sum = 0;

        for (let i = 0; i < sumArr.length; i++) {
            let curNum = Number(sumArr[i]);
            sum += curNum;
        }

        arr.push(sum);

    }
    console.log(arr.join(" "));
}
