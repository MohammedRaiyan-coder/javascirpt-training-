let ul=document.querySelector("ul");


ul.addEventListener("click",function(dets){  // it is called event bubbling , hum ye tarika isliye use krte he taki ye hame baar baar line-through operation na chalana pade
   dets.target.classList.toggle("lt");  // toggle

});