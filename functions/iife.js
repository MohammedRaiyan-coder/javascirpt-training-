// iife func dont need to call the function it is invoked


(function(){
    console.log("rio");

})(); 


// convert the normal function into iife function,  and one realword use case example

(function init(){
    console.log("hi mohammed raaiyan");
})();


//realworld use case example


(function in(){
        let score=0;
        return{
            getscore: function (){
                console.log(score);
            },
            setscore: function(val){
                score=val:
            },
        };
    })
    in();