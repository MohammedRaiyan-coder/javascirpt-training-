//closurefn , ek func jo return kare aur ek funcion return hone wala function use kare parent function ki koi variable

function fun(){
    let a= 10;
    return function(){
        console.log(a);
    }
}
fun()()


//lexical scoping


function ab(){
    let a =10;
    return function cd(){
        let b=20;
         return function ef(){
            let c=30;
            console.log(a+b+c);
        }
    }
}

ab()()()