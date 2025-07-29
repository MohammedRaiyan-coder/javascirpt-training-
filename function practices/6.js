// what does it mean we say "function are first-class citizens
// can you asssign a function to a variable and then call it and show how "

let fun = function(){

}
fun()


// pass an function into an another function and execute it

function Abcd(value){
    value();
}
Abcd(function(){
    console.log("raiyan");
});






//what is higher order function ? function return the another function , or function accept tha funcion in tha parameter

// function return the another function
function z(){
    return function(){

    }
}

// function accepts the another function in the parameter

function qw(val){
    val();
}
qw(function(){
    console.log("mohammed");
})


// convert the impure function into pure function 

let total=10
function t(val){
    let newtotal=total;
    newtotal+=val;
}
console.log(t(20));


