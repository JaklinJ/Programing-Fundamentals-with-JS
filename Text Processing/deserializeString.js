function deserializeString(data) {
    let newData = data.slice(0);
    
    let result = [];

    let maxIndex = 0;

    let tokens = newData.shift().split(":");
 while (!tokens.includes('end')) {
    let indexes = tokens[1].split("/");
    for (let i = 0; i< indexes.length; i++) {
       let index = Number(indexes[i]);
       if (maxIndex <= index) {
        maxIndex = index;
       }
    }

    tokens = newData.shift().split(":");
 }
 result.push('a'.repeat(maxIndex));
 let text = result.shift().split("");
 
 

let commands = data.shift().split(":");
while (!commands.includes('end')) {
    let letter = commands[0];
    let indexes = commands[1].split("/");
    for (let i = 0; i< indexes.length; i++) {
       let index = Number(indexes[i]);
       text.splice(index,1,letter);
    }

    commands = data.shift().split(":");
 }

 console.log(text.join(""));
}
