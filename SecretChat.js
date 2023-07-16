function solve(data) {
  
  let message = data.shift();
  
  let token = data.shift();
  
  while (token !== 'Reveal') {
    let [comand, index, replacement] = token.split(":|:");
    
    switch(comand) {
      case "InsertSpace" : 
      message = message.split("");
      message.splice(index, 0, ' ');
      message = message.join(""); 
      
      console.log(message);
      break;
      case "Reverse":
      
      if (message.includes(index)) {
       let reversedIndex = [];
       for (let i = index.length; i >0; i--) {
         let curentChar = index[i];
         reversedIndex.push(curentChar);
        
       }
       reversedIndex = reversedIndex.join("");
message.replace(index, reversedIndex);
      console.log(message);
      
      } else {
        console.log('error');
      }
      break;
      case "ChangeAll":
        let messageLength = message.length;
        message = message.split("");
      
        for(let i = 0; i< messageLength; i++) {
	let curChar = message[i];
	if (curChar === index) {
	  message.splice(i,1,replacement);
	}
          }
 	message = message.join("");
        console.log(message);
      break;  
     
    }
    
    token = data.shift();
  }
  console.log(`You have a new text message: ${message}`)
}
solve([
 'heVVodar!gniV',
 'ChangeAll:|:V:|:l',
 'Reverse:|:!gnil',
 'InsertSpace:|:5',
 'Reveal'
]);
