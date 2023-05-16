function leapYear(year) {
    let thisYear = year;
    if ((thisYear % 4 == 0) && (thisYear % 10 !== 0)  ) {
        console.log("yes");
    } else if ((thisYear % 400 == 0)) {
        console.log("yes")
    } else {
        console.log("no");
    }
}
leapYear(1900)