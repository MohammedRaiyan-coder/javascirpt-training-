//closure property and why it is created

function r() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}
const counter = r();
counter();