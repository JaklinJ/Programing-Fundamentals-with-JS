function englishNameOfLastDigit(num) {
let lastDigit = num % 10;
let words = ["zero", "one", "two", "three", "four", "five" , "six", "seven", "eight", 
"nine"];
let numToWords = words[lastDigit];
console.log(numToWords);


}
