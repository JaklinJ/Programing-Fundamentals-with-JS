function theathrePromotions(day, age) {
    let currentDay = day;
    let currentAge = age;

    if (currentAge >= 0 && currentAge <= 18) {
        switch (currentDay) {
            case "Weekday":
                console.log("12$");
                break;
            case "Weekend": 
                console.log("15$");
                break;
            case "Holiday": 
                console.log("5$");
                break;
        }
    } else if (currentAge > 18 && currentAge <= 64) {
        switch (currentDay) {
            case "Weekday":
                console.log("18$");
                break;
            case "Weekend": 
                console.log("20$");
                break;
            case "Holiday": 
                console.log("12$");
                break;
        }
    } else if (currentAge > 64 && currentAge <= 122) {
        switch (currentDay) {
            case "Weekday":
                console.log("12$");
                break;
            case "Weekend": 
                console.log("15$");
                break;
            case "Holiday": 
                console.log("10$");
                break;
        }
    } else {
        console.log("Error!");
    }
}
theathrePromotions('Weekday',
42)