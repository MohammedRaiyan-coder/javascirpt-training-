let h = [1, 2, 3, 4, 5, 6]
//asscending order

let hi = h.sort(function (a, b) {
    return a - b;
});
console.log(hi);


//desscending order
h.sort(function (a, b) {
    return b - a;
});
console.log(h);