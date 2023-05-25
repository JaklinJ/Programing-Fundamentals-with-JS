function sortNums(a, b, c) {
if (a>= b && a >= c) {
    console.log(a);
    b >= c ? console.log(b) : console.log(c);
    c <= b ? console.log(c) : console.log(b);
} else if (b >= a && b >= c) {
    console.log(b);
    a >= c ? console.log(a) : console.log(c);
    c <= a ? console.log(c) : console.log(a);
} else if (c >= a && c>= b) {
    console.log(c);
    b >= a ? console.log(b) : console.log(a);
    a <= b ? console.log(a) : console.log(b);
}

}
