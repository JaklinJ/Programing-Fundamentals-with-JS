function addressBook(data) {

let book = {};

data.forEach(line => {
    let [name, address] = line.split(":");
    book[name] = address;
});
    let sortedBook = Object.entries(book);
    sortedBook.sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));
     for (const [key,value] of sortedBook) {
         console.log(`${key} -> ${value}`);
     }

    

}
