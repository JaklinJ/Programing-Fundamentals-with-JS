function smallestTwoNumbers(arr) {

    let sortedInAscending = arr.sort((a, b) => {
        return a - b;
    });

    let result = sortedInAscending.slice(0, 2);

    return result.join(" ");
}
