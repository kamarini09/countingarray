"use strict";
// counting with delay
let i = 0;
const arr = [];



function startCounting(){
    i++;
    console.clear();
    console.log(arr);
    
    if(i<10){
        arr.unshift(i);
       setTimeout(startCounting,600);
    }
    
}

startCounting();