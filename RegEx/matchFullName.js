function matchFullName(text) {

let test = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

let validNames = [];

while((validName = test.exec(text)) !== null) {
    validNames.push(validName[0]);
}
console.log(validNames.join(' '));
}
