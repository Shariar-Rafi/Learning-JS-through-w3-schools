/*
// document.getElementById("demo").innerHTML="Test 0";
const p = document.getElementById("demo");
p.innerHTML="Test 0";
*/


const x = document.forms["frm1"];

let text = "";
//looping into the targeted form 
for (let i = 0; i < x.length; i++) {
    text+= x.elements[i].value + "</br>";
}

document.getElementById("demo").innerHTML= text;

