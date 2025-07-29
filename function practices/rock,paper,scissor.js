//rock paper scissor game ,this is called early mehtod
function rps(user,computer){
    if(user === computer) return "draw";
    if(user==="rock" && computer==="scissor") return "user";
    if(user==="paper" && computer==="rock") return "user";
    if(user==="scissor" && computer==="paper") return "user";
    return "computer";
}
console.log(rps("rock","rock")); 

//user wtih opponent

function fun(user,opponent){
    if(user==="scissor" && opponent==="paper") return "user";
    if(user==="paper" && opponent==="stone") return "user";
    if(user==="stone" && opponent==="scissor") return "user";
    return "opponent";
}
console.log(fun("scissor","stone"));