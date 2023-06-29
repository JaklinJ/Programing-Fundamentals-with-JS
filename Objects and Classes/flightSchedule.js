function flightSchedule(data) {

let flights = {};

let flightInfo = data[0];
flightInfo.forEach(flight => {
    let [flightNum, destination] = flight.split(" ");
    flights[flightNum] = {
        Destination: destination,
        Status: "Ready to fly"
    }

});

data[1].forEach(line => {
    let [num, status] = line.split(" ");
    if (flights.hasOwnProperty(num)) {
        flights[num].Status = status;
    }
});

for (const fly in flights) {
    if (flights[fly].Status === String(data[2])) {
        console.log(flights[fly]);
        
    }
}

}
