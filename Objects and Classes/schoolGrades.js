function schoolGrades(data) {

let students = {};

data.forEach(line => {
    let list = line.split(" ")
    let student = list.shift();
    let grades = list.map(Number);
    
    
    if (!students.hasOwnProperty(student)) {
          students[student] = grades;
    } else {
     grades.forEach(el => {
        students[student].push(el);
     });
    }
    
});

for (const key in students) {
   let sum = students[key].reduce((accumulator, currentValue) => 
    accumulator + currentValue,
    0,);
    let avgsum = sum/ students[key].length;
    students[key] = avgsum.toFixed(2);
}

let sorted = Object.entries(students);
sorted.sort((a,b) => a[0].localeCompare(b[0]));

for (const [key, value] of sorted) {
    console.log(`${key}: ${value}`);
}
    
}
