function loadingBar(num) {

let percentCount = num / 10;
let percent = "%";
let dot = "."
let dots = 10 - percentCount;

if (percentCount === 10) {
    console.log("100% Complete!");
    console.log('[%%%%%%%%%%]')
} else {
    console.log(`${num}% [${percent.repeat(percentCount)}${dot.repeat(dots)}]`);
    console.log('Still loading...');
}

}
