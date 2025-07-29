// kuch screen par ho ur aapko reaction dena ho to waqt aapko event handle karna aana chahiye

// event matlab kuch action hota he

//event listener ka matlab koi action ke badle me reaction diya ho

//events types :click, change,input , submit , mouse over , keyup

//event binding: addeventlistener  , removereventlistener
// event handling  , mouse event click

let h1 = document.querySelector("#hi");
h1.addEventListener("click", function fun() {
  h1.style.color = "red";
});

// event handling , click type  ,//  removing event listner

let p = document.querySelector("p");
function dblclick() {
  p.style.color = "green";
}
p.addEventListener("dblclick", dblclick);
p.removeEventListener("click", dblclick);

// to get input event listener ,using  input type

let inp = document.querySelector("input");

inp.addEventListener("input", function (dets) {
  if (dets.data !== null) {
    //if the value getting null then use this if case inside the func
    console.log(dets.data);
  }
});

// select the device and change the headng based on our selection

let sel = document.querySelector("select");
let device = document.querySelector("#device");

sel.addEventListener("change", function (elements) {
  device.textContent = `${elements.target.value} device selected`;
});

// change the heading using window event  , window type
// ham ise khaali screen pe use krte he use ham window kehte he
let h2 = document.querySelector("h2");

window.addEventListener("keydown", function (dets) {
  //   console.log(dets.key);           // to show the opt in the console
  //   h2.textContent = dets.key;       // to show the opt in the wondow or screen

  if (dets.key === " ") {
     h2.textContent = "SPC";    // this is for when space key is pressed it will show empty so for we can use this method
  } else {
     h2.textContent = dets.key;
  }
});



// making button using js

let btn=document.querySelector("#btn");
let fileinp= document.querySelector("#fileinp");

btn.addEventListener("click", function (){
  fileinp.click();
});

fileinp.addEventListener("change", function(dets){
  const file=dets.target.files[0];
  if(file){
    btn.textContent=file.name;
  }
});



