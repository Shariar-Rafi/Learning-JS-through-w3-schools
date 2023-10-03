/*
let x1 = Math.PI;
console.log(x1); //3.141592653589793

let x2 = Math.SQRT2;// root of 2
console.log(x2);
*/


/* NOTE:

Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E
*/


/*
//---MAth Methods---
// let x3 = Math.round(4.4);// 4
let x2 = Math.round(4.5);// 5
console.log(x2);
*/

/*
let x  = Math.random();
let y = Math.floor(Math.random()*61) //random 0-9
console.log(y);
*/


let x  = Math.random();
let y = Math.floor(Math.random()*60)+1 //random 1-60
console.log(y);



/*
#This JavaScript function always returns a random number between min (included) and max (excluded):

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


#This JavaScript function always returns a random number between min and max (both included):

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
*/