function mergeArrays(arr1, arr2) {

    let arrNew = [];

for (let index = 0; index < arr1.length; index++) {

    if (index % 2 === 0) {
        arrNew[index] = Number(arr1[index]) + Number(arr2[index]);
    } else {
        arrNew[index] = arr1[index] + arr2[index];
    }
}

 console.log(arrNew.join(" - "));

}
