function passwordValidator(input) {

    let isValid = true;
    let isInvalidLength = input.length < 6 || input.length > 10;

    if (isInvalidLength) {
        isValid = false;
        console.log("Password must be between 6 and 10 characters");
    }

    let isOnlyDigitsAndLetters = true;
    let countDigits = 0;

    for (let i = 0; i < input.length; i++) {
        let currentPosition = input.charCodeAt(i);
        let isNumbers = currentPosition >= 48 && currentPosition <= 57;
        let isNotNumber = currentPosition < 48 || currentPosition > 57;
        let isNotCapitalLetters = currentPosition < 65 || currentPosition > 90
        let isNotSmallLetters = currentPosition < 97 || currentPosition > 122;

        if (isNumbers) {
            countDigits++;
        }
        if (isNotNumber && isNotCapitalLetters && isNotSmallLetters) {
            isOnlyDigitsAndLetters = false;
            isValid = false;
        } 
    }
    if (countDigits < 2) {
        isValid = false;
    }
     if (isValid) {
        console.log("Password is valid")
     }
    if (!isOnlyDigitsAndLetters) {
        console.log("Password must consist only of letters and digits");
    }
    if (countDigits < 2) {
        console.log("Password must have at least 2 digits")
        isValid = false;
    
    }
}
