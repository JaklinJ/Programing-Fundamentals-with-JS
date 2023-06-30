function meetings(data) {

    let itinerary = {};

data.forEach(line => {
    let [day, person] = line.split(" ");
    if (itinerary.hasOwnProperty(day)) {
        console.log(`Conflict on ${day}!`);
    } else {
        itinerary[day] = person;
        console.log(`Scheduled for ${day}`);
    }
});

    for (let key in itinerary) {
        console.log(`${key} -> ${itinerary[key]}`);
    }

}
