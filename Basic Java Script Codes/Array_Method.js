const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());
console.log(fruits.join(" - "));

fruits.push("Watermelon","Cherry"); //add element as a last item

console.log(fruits);

fruits.pop(); //removes last element

console.log(fruits);

fruits.shift(); //removes first element

console.log(fruits); 

fruits.unshift("Carrot");//add element as a fast item

console.log(fruits); 

// delete fruits[0]; //delete and set the 0 no index as undefined

// console.log(fruits);

fruits.splice(1,0,"kiwi");
console.log(fruits);

fruits.splice(0,1);
console.log(fruits);




