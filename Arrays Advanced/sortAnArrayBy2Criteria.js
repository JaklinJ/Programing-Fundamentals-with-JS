function sortAnArrayBy2Criteria(arr) {

let sortedArr = arr.sort((a,b) => {
    if (a.length !== b.length) {
       return a.length - b.length;
    }
    return a.localeCompare(b);
})
console.log(sortedArr.join("\n"))
}
