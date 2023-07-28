function worldTour(data) {
  
  let destination = data.shift();
  
  let token = data.shift();
  while (token !== "Travel") {
    
    let [command, one, two] = token.split(":");
    
    switch (command) {
      case "Add Stop":
      	let index = Number(one);
      	let string = two;
      	if (index >=0 && index < destination.length) {
      	  let firstPart = destination.substring(0,index);
      	  let secondPart = destination.substring(index);
      	  destination = firstPart + string + secondPart;
      	} 
      	console.log(destination);
      break;
      case "Remove Stop":
        let startIndex = Number(one);
        let endIndex = Number(two);
        
        if (startIndex >= 0 && startIndex < destination.length && endIndex >0 && endIndex < destination.length) {
          let removedStop = destination.substring(startIndex, endIndex+1);
          destination = destination.replace(removedStop,"")
        }
        console.log(destination);
      break;
      case "Switch":
        let oldString = one;
        let newString = two;
        
        if(destination.includes(oldString) && oldString !== newString) {
          destination = destination.replace(oldString, newString);
        }
        console.log(destination);
      break;
      
      
      
    }
    
    token = data.shift();
  }
  
  console.log(`Ready for world tour! Planned stops: ${destination}`)
}
