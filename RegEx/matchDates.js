function matchDates(data) {

let test = /\b(?<day>\d{2})(?<separator>[-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/gm;

let match = test.exec(data);

while (match) {

    let day = match.groups['day'];
    let month = match.groups['month'];
    let year = match.groups['year'];

    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);

    match = test.exec(data);
}

}
