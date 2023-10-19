/**
 const letters = new Set(["a","b","c"]);

for (const x of letters) {
console.log(x);
}
 */


// Create a Set
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
letters.forEach (function(value) {
  text += value;
});

console.log(text);
console.log(letters);


