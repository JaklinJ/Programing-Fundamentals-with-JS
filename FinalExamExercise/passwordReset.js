function passwordReset(data) {

let password = data.shift();
let count = 0;
let result = '';


let token = data.shift();

while (token !== "Done") {

    let [command, token1, token2] = token.split(" ");

    switch (command) {
        case "TakeOdd":
            for (let el of password) {
                if (count !== 0) {
                    if (count % 2 !== 0 || count === 1) {
                        result += el;
                    }
                }

                count++;
            }
            count = 0;
            password = result;
            result = '';
            console.log(password);
            
        break;
        case "Cut":
            let index = +token1;
            let length = +token2;
            let removablePart = password.substring(index, index + length);
            
            password = password.replace(removablePart, "");
            console.log(password);
        break;  
        case "Substitute":
            let substring = token1;
            let substitute = token2;
            let isHavingTheSubstring = false;
            
            while (password.includes(substring)) {
                isHavingTheSubstring = true;
                password = password.replace(substring, substitute);
            }
            if(isHavingTheSubstring) {
                console.log(password)
            }
            if (!isHavingTheSubstring) {
                console.log("Nothing to replace!");
            }
        break;
    }

    token = data.shift();
}

    console.log(`Your password is: ${password}`);

}
