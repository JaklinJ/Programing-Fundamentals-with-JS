function partyTime(data) {

let vipList = [];
let normalList = [];

let command = data.shift();

while (command !== 'PARTY') {
    let charOfWord = command[0];
    if (!isNaN(charOfWord)) {
        vipList.push(command);
    } else {
        normalList.push(command);
    }
    command = data.shift();
}

let endList = vipList.concat(normalList);

data.forEach(guest => {
    if (endList.includes(guest)) {
        endList.splice(endList.indexOf(guest),1);
    }
});
console.log(endList.length);
endList.forEach(element => {
    console.log(element);
});

}
