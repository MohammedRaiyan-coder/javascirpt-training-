//map sir tab use karna hai jab aapko ek naya array bananahe 
//map dkhete hi saath man me ek blank array bana liya karo
let arr = [11, 20, 43, 4, 35, 6];

 let a=arr.map(function(values){
    if(values>10) return values;
});
console.log(a);