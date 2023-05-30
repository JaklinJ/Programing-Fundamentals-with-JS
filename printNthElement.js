function printNthElement(arr) {

    let nStep = Number(arr[arr.length-1]);
    let newArr = [];

    
    for (let i = 0; i < arr.length -1; i++) {
        
        if (i % nStep === 0) {
            newArr.push(arr[i]);
        }
        
    
    }
    console.log(newArr.join(" "));
    }
