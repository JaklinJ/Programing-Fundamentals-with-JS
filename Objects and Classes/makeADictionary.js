function makeADictionary(data) {

    let result = {};

for (const line of data) {
    let obj = JSON.parse(line);
    let objKey = Object.keys(obj);
    result[objKey] = obj[objKey];
    
}

    Object.keys(result).sort((a,b) => a.localeCompare(b)).forEach( a => {
        console.log(`Term: ${a} => Definition: ${result[a]}`)
    })

    }
