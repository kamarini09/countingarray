"use strict";

let i = 0;


function startCounting(){
    i++;
    console.log(i);
    if(i<10){
       setTimeout(startCounting,600);
    }
    
}

startCounting();