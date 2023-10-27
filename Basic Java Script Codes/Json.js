// {
//     "employees":[
//       {"firstName":"John", "lastName":"Doe"},
//       {"firstName":"Anna", "lastName":"Smith"},
//       {"firstName":"Peter", "lastName":"Jones"}
//     ]
// }

/*
//Converting JSON to JS Object
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text); //making the JSON text form into a valid JS Object


console.log(text);//String
console.log(obj);//Object 
*/



//Converting JS Object to JSON
const person={
    fName: "Shariar",
    lName: "Rafi",
};

let x = JSON.stringify(person);
console.log(x); //String