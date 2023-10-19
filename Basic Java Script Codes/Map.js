/*
const fruits = new Map([
    ["apples", 500],
    ["bananas", "a"],
    ["oranges", 200]
  ]);

console.log(fruits);
*/

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  let text = "";
  fruits.forEach (function(value, key) {
    text += key + ' = ' + value + "\n";
  })
;

console.log(text);