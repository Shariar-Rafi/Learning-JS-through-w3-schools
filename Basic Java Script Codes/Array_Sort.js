/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);
*/

/*
const fruits = [13,0,2,100,5];
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits); // big lol
*/

/*
const num = [13,0,2,100,5];
num.sort(
    function(a,b){
        return a-b;  //b - a return decending 
    }
);
console.log(num); // :)
// num.reverse();
// console.log(num);// [100, 13, 5, 2, 0]
console.log(`
Highets value is: ${num[0]}
Lowest value is: ${num[num.length-1]} 
`);
*/

const numb = [12,2,99,67,5,0,102]
console.log(numb);

function myArrayMax(arr){
    return Math.max.apply(null,arr);
}

console.log(myArrayMax(numb)); //return max number

