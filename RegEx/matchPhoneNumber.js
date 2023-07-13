function matchPhoneNumber(text) {

let test = /[+]359([ -])2\1[0-9]{3}\1[0-9]{4}/g;

let validMatches = [];

while ((validPhone = test.exec(text)) !== null) {
    validMatches.push(validPhone[0]);
}

    console.log(validMatches.join(', '));

}
