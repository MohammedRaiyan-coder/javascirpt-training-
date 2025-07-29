// create a function use rest parameter to accept any number of scores and return the total


function getscore(...scores){
    let total=0;
    scores.forEach(function(value){
        total = total + value;
    });
    return total;
}
console.log(getscore(10,20,30,40,50));
