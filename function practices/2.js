// convert the normal function into fat arrow function

function fun(a=10,b=10){
    console.log(a*b);
}
fun()


// fat arrow function

let rio =(a=10,b=20)=>{
    console.log(a*b);
}
rio();
