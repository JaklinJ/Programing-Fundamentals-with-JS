function blackFlag(arr) {

let daysOfPlunder = Number(arr[0]);
let dailyPlunder = Number(arr[1]);
let target = Number(arr[2]);

let totalPlundered = 0;

for (let i = 1; i <= daysOfPlunder; i++) {
    
    if (i % 3 === 0) {
        totalPlundered += dailyPlunder / 2;
    }
    
    totalPlundered += dailyPlunder;

    if (i % 5 === 0) {
        totalPlundered *= 0.7;
    }
}

    if (totalPlundered >= target) {
        console.log(`Ahoy! ${totalPlundered.toFixed(2)} plunder gained.`);
    } else {
        let percent = (totalPlundered / target) * 100;
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
    }

}
blackFlag((["10",
"20",
"380"])
);