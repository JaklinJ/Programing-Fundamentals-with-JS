function convertToJson(name, lastName, hairColor) {

let obj = {
    name,
    lastName, 
    hairColor
}

let jsonStr = JSON.stringify(obj);
console.log(jsonStr);

}
