function theBiscuitFactory(arr) {

let biscuitsPerDayPerWorker = Number(arr.shift());
let workers = Number(arr.shift());
let competingFactoryBiscuits = Number(arr[0]);

let biscuitsPerDay = biscuitsPerDayPerWorker * workers;
let totalBiscuits = 0;

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        totalBiscuits += (biscuitsPerDay*0.75);
        totalBiscuits = Math.floor(totalBiscuits);
    } else {
        totalBiscuits += biscuitsPerDay;
        totalBiscuits = Math.floor(totalBiscuits);
    }
}
let diference = totalBiscuits - competingFactoryBiscuits;
let percent = diference / competingFactoryBiscuits * 100;
let result = Math.abs(percent);

console.log(`You have produced ${totalBiscuits} biscuits for the past month.`);

if (diference >= 0) {
    console.log(`You produce ${parseFloat(result).toFixed(2)} percent more biscuits.`);
} else {
    console.log(`You produce ${parseFloat(result).toFixed(2)} percent less biscuits.`);
}

}
