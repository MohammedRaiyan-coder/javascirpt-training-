//selecting element from html

let h =document.querySelector("h1"); //     accesing 
h.textContent="mohammed raiyan";  //     manipulating
console.log(h);       // printing


//creating an element in js

let h2 =document.createElement("h2");    //   creating
h2.textContent="assalamualaikum broo"; //assining the values
document.querySelector("body").prepend(h2);//*   accesing and printing



// styling the element in js

let h1=document.querySelector("h1");
h1.style.color="red";
h1.style.backgroundColor="yellow";



//slecting the li element and print their text using a loop

 let list =document.querySelectorAll("li");
list.forEach(function(val) {
    console.log(val.textContent);
}); 




//slecting the li elemnt using for loop 

for(i=0;i<list.length;i++)
{
    console.log(list[i].textContent);
}


//selecting li element another type of method using for loop

for (let val of list){
    console.log(val.textContent);
}



// selcting the button and print  

let button =document.querySelectorAll(".buy-now");
console.log(button);




//manipulating the hEADING using js

let hi=document.querySelector("#rio");
hi.textContent="welcome to mohamedraiyan's page";


// select paragraph and replace its content with <b>updated </b> by javascripted

let p=document.querySelector("p");
p.innerHTML="<b>updated</b> by javascript";




// to get the src of an img using javascript

let img= document.querySelector("img");
console.log(img.getAttribute("src")); // its a type 1
console.log(img.src);//its a type 2



//to chnge the src attribute of an img using js

console.log(img.src).setAttribute("");
 


// add a title attribute to a div dynamically 

let div= document.querySelector(".title");
div.setAttribute("title","hy bro kese ho");



// update the anchor link

let a = document.querySelector("a");
a.href="www.w3schools.com";


//add a highlight class to evry even item in a list


let ul=document.querySelectorAll("#class li:nthchild(2n)");
console.log(ul);
let li= ul.forEach(function(element){
    console.log(element);
});
li();








  