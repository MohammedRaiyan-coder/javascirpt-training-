let input=document.querySelector("input");

let span=document.querySelector("span");

input.addEventListener("input", function(){
    span.textContent=input.value.length;
})