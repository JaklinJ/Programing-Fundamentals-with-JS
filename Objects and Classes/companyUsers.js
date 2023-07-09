function companyUsers(data) {

let companyList = {};

for (const line of data) {
    let [company, id] = line.split(" -> ");
    
    if (!companyList.hasOwnProperty(company)) {
        companyList[company] = [];

            companyList[company].push(id);
        
    } else {
        if (!companyList[company].includes(id)) {
            companyList[company].push(id);
        }
    }

}

let sorted = Object.entries(companyList);
sorted.sort((a,b) => a[0].localeCompare(b[0]));

for (const [key,value] of sorted) {
    console.log(key);
    for (const employee of value) {
        console.log(`-- ${employee}`);
    }
}

}
