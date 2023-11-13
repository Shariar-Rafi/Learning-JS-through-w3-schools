/*
console.log("1st line of code");

setTimeout(function() {
    console.log("2nd line of code");

},0)

console.log("3rd line of code");

//output:
// 1st line of code
// 3rd line of code
// 2nd line of code (asynchronous function will call at the last)
*/


console.log("1st line of code");

setInterval(function() {
    console.log("2nd line of code");

},2000) //2000 ms = 2 sec

console.log("3rd line of code");