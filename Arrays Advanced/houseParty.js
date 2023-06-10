function houseParty(arr) {

    let partyList = [];

    for (let person of arr) {
        let details = person.split(" ")
        let personName = details[0];

        if (details.includes('not')) {

            if (partyList.includes(personName)) {
                let index = partyList.indexOf(personName);
                partyList.splice(index, 1);
            } else {
                console.log(`${personName} is not in the list!`)
            }
        } else {
            if (partyList.includes(personName)) {
                console.log(`${personName} is already in the list!`);
            } else {
                partyList.push(personName);
            }
        }
    }
    console.log(partyList.join("\n"));
}
