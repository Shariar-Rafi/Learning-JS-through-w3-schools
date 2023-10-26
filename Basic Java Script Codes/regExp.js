/**
 there are two functions-
 search()
 replace()
 */

// let text = "Visit W3Schools!";
// let n = text.search("W3Schools");
// console.log(n);


/*
let text = "Visit W3Schools!";
let n = text.search("w3Schools");
console.log(n); //print -1
*/

let text = "Visit W3Schools!";
let n = text.search(/w3Schools/i);
console.log(n);

let text1 = "Visit W3Schools and w3Schools!";
let m = text1.replace(/w3Schools/i,"null");
console.log(m);

let text2 = "Visit W3Schools and w3Schools!";
let o = text2.replace(/w3Schools/ig,"null");
console.log(o);