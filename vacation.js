function vacation(people, type, day) {
    let peopleCount = people;
    let typePeople = type;
    let dayOfWeek = day;
    let price = 0;

    if (typePeople === "Students") {
        switch (dayOfWeek) {
            case "Friday": 
                price = 8.45;
                break;
            case "Saturday": 
                price = 9.80;
                break;
            case "Sunday" :
                price = 10.46;
                break;
        }
    } else if ( typePeople === "Business") { 
        switch (dayOfWeek) {
            case "Friday": 
                price = 10.9;
                break;
            case "Saturday": 
                price = 15.60;
                break;
            case "Sunday" :
                price = 16;
                break;
        }
    } else { 
        switch (dayOfWeek) {
            case "Friday": 
                price = 15;
                break;
            case "Saturday": 
                price = 20;
                break;
            case "Sunday" :
                price = 22.50;
                break;
        }
    }
    let endPrice = peopleCount * price;
    if (peopleCount >= 30 && typePeople === "Students") {
        endPrice *= 0.85;
    } else if (peopleCount >= 100 && typePeople === "Business") {
        endPrice = (peopleCount- 10) * price;
    } else if (peopleCount >= 10 && peopleCount <= 20 && typePeople === "Regular") { 
        endPrice *= 0.95;
    }
    console.log(`Total price: ${endPrice.toFixed(2)}`)
}
vacation(40,
    "Regular",
    "Saturday")