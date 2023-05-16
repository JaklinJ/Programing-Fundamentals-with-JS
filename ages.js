function ages(age) {
    let givenAge = age;
    if (givenAge>=0 && givenAge <=2) {
        console.log("baby");
    } else if (givenAge >= 3 && givenAge <= 13) {
        console.log("child");
    } else if (givenAge >= 14 && givenAge <= 19) {
        console.log("teenager");
    } else if(givenAge >= 20 && givenAge <= 65) {
        console.log("adult");
    } else if (givenAge >= 66) {
        console.log("elder");
    } else {
        console.log("out of bounds");
    }
}
ages(20)