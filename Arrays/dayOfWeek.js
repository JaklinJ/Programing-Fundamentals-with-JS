function dayOfWeek(day) {
let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let dayIndex = day-1;
let result = daysOfWeek[dayIndex];
if (result) {
    console.log(daysOfWeek[dayIndex]);
} else {
    console.log("Invalid day!")
}
}
