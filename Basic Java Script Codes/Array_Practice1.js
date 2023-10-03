
const myArray = [6,1,0,10,2,5,100];

const myObj ={
    name : "rafi",
    age : 23,
};

console.log((myArray.length));
// console.log((myArray.sort()));
console.log(myArray[myArray.length -1]); //accessing last element
myArray.push(200);
console.log(myArray[myArray.length -1]);
console.log(myArray); //[6, 1, 0, 10, 2, 5, 100, 200]

// text = "<ul>";
// let len = myArray.length;
// for (i = 0;i < len; i++){
//     text+="<li>" + myArray[i] + "</li>";; 
// }
// text += "</ul>";
// document.write(text);

function myFunction(value){
    console.log(value);
}

myArray.forEach(myFunction);


console.log(Array.isArray(myArray)); //is an array
console.log(Array.isArray(myObj)); // is not an array