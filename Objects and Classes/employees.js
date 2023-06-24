function employees(data) {

    let people = {};

    for (const person of data) {
        people[person] = person.length;
    }

    for (const person in people) {
        console.log(`Name: ${person} -- Personal Number: ${people[person]}`);
    }

}
