//if the arguments value is lot then we can use rest and spread method to rite a code in easy way example(...)
//if ... function ke parameter me he to it is ccalled rest
// if ... arrays and objects me lageto it is called spread 


// it is called rest
function fun(...value){
    console.log(...value);
}
fun(1,2,3,4,5,6,7,8,9,10)

//it is called spread
let arr=[1,2,3,4,5,6,7];
function rio(...value){
    console.log(...value);
}

rio(arr);

