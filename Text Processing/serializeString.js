function serializeString(data) {

let text = data.shift();
let result = {};
 for (let i = 0; i< text.length; i++) {
    let currentChar = text[i];

    if (!result.hasOwnProperty(currentChar)) {
        result[currentChar] = [];
        let indexOfChar = i;
        result[currentChar].push(i);
    } else {
        result[currentChar].push(i);
    }

 }
 let entries = Object.entries(result);

 for (const [key,value] of entries) {
    console.log(`${key}:${value.join("/")}`);	 
 }

}
