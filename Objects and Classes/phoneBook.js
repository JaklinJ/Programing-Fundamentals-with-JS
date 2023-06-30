function phoneBook(data) {

    let book = {};

data.forEach(line => {
    let [name, number] = line.split(" ");
    book[name] = number;
});
    
     for (let key in book) {
         console.log(`${key} -> ${book[key]}`);
     }

}
