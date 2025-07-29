// form

let form = document.querySelector("form");

let inputs = document.querySelectorAll("input");
let loginform=document.querySelector("#loginform")

form.addEventListener("submit", function (dets) {
  dets.preventDefault(); // agar reload krne se data lose na ho to ye use kre

  console.log(
    inputs[0].value,
    inputs[1].value,
    inputs[2].value,
    inputs[3].value,
    inputs[4].value
  );



//   let card = document.createElement("div"); 
//   card.classList.add("card");

//   let profile = document.createElement("div"); 
//   profile.classList.add("profile");

//   let img=document.createElement("img");
//   img.getAttribute("src","");

//   let h3 = document.createElement("h3");
//   h3.appendChild(profile);
//   h3.textContent = "mohammed faizal";

//   let h5=document.createElement("h5");
//   h5.textContent="logistics lead";
//   h5.appendChild(profile);

//   let p=document.createElement("p");
//   p.textContent="he is the tech lead in a logistics company";
//   p.appendChild(profile);

//   card.appendChild(profile);
//   console.log(card);



  //to creating element using js

let card = document.createElement("div");  //div has been created and its class name is card
card.classList.add("card");

let profile = document.createElement("div");    //div has been created and its class name is profile
profile.classList.add("profile");

let img = document.createElement("img");
img.setAttribute("src", inputs[0].value); //creating img element in js, and giving  input's index value to img
profile.appendChild(img); // add image to profile

let h3 = document.createElement("h3");
h3.textContent = inputs[1].value;

let h5 = document.createElement("h5");
h5.textContent = inputs[2].value;

let p = document.createElement("p");
p.textContent = inputs[3].value;

// Append text elements to card
card.appendChild(profile);
card.appendChild(h3);
card.appendChild(h5);
card.appendChild(p);

// Now `card` is fully built
console.log(card);
loginform.appendChild(card);

//agar input submit krne ke baad inputs ke data erase naho to ye taika apnaye
inputs.forEach(function(input){
  if (input.type!=="submit"){

    input.value="";
  }
});

});
