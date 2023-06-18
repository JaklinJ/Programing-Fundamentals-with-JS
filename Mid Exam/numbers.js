function numbers(arr) {

    let numbers = arr.shift().split(" ").map(Number);

    

    for (let i = 0; i < arr.length; i++) {

        let curComands = arr[i].split(" ");
        let command = curComands[0];
        let value = Number(curComands[1]);


        switch (command) {
            case "Add":
                numbers.push(value);
                break;
            case "Remove":
                if (numbers.includes(value)) {
                    let index = numbers.indexOf(value);
                    numbers.splice(index, 1);
                }
                break;
            case "Replace":
                let replacement = Number(curComands[2]);
                if (numbers.includes(value)) {
                    let indexOfValue = numbers.indexOf(value);
                    numbers.splice(indexOfValue, 1, replacement);
                }
                break;
            case "Collapse":
                for (let i = 0; i < numbers.length; i++) {
                    let curentNum = numbers[i];
                    if (curentNum < value) {
                        numbers.splice(i, 1, 0);
                    }
                }
                numbers = numbers.filter(el => el !== 0);
                break;

        }

    }
    
    console.log(numbers.join(" "));
}
