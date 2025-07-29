// if you print the result each and everytime the output will increase by 1

// another example


function fun() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const counte=fun()

console.log(counte());
console.log(counte());
console.log(counte());
console.log(counte());
console.log(counte());