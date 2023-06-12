function arrayManipulator(nums, commands) {

    let result = [];
    let sum = 0;

    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i].split(" ");
        let command = currentCommand[0];
        let index = Number(currentCommand[1]);
        let value = Number(currentCommand[2]);

        switch (command) {
            case "add": nums.splice(index,0, value); break;
            case "addMany": 
            let currentEl = 0;
            let removeFirst = commands[i].split(' ');
            for (let i = removeFirst.length - 1; i >= 2; i--) {
                currentEl = removeFirst[i];
                nums.splice(index, 0, +currentEl);
            }; break;
            case "contains": 
            console.log(nums.indexOf(+index)); break;
            case "remove": nums.splice(index, 1); break;
            case "shift": 
            for (let i = 1; i <= index; i++) {
                let firstNum = nums.shift();
                nums.push(firstNum);
            }; break;
            case "sumPairs": 
            let newArr = []
        if(nums.length % 2 !== 0){
            nums.push(0)
        }
        for(let i = 0; i < nums.length; i+=2){
            let sum = nums[i] + nums[i + 1]
            newArr.push(sum)
        }
        nums = newArr; break;
            case "print": 
            let finalResult = nums.join(", ")
            console.log(`[ ${finalResult} ]`); break;
        }
    }
    

}
