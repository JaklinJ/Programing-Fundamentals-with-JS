function shoppingList(arr) {

let groceryList = arr.shift().split("!");

for (let i = 0; i < arr.length; i++) {
    let commands = arr[i].split(" ");
    let comand = commands[0];
    let item = commands[1];
    let newItem = commands[2];

    switch(comand) {
        case "Urgent": 
        if(!groceryList.includes(item)) {
            groceryList.unshift(item);
        } break;
        case "Unnecessary": groceryList = groceryList.filter(el => el !== item); 
        break;
        case "Correct": 
        if (groceryList.includes(item)) {
            let index = groceryList.indexOf(item);
            groceryList.splice(index, 1);
            groceryList.splice(index, 0, newItem);
        } break;
        case "Rearrange": 
        if (groceryList.includes(item)) {
            let index = groceryList.indexOf(item);
            groceryList.splice(index, 1);
            groceryList.push(item);
        }
    }
}

    console.log(groceryList.join(", "));

}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion","Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]);