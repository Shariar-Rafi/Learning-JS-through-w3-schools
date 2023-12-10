// document.getElementById("img1").src = "pic_bulbon.gif";

/*
function validateForm(){
    const f = document.forms["myForm"] ["fname"].value;
    if(f === ""){
        alert("Enter your name correctly!");
        return false;
    }
}
*/
let text;
function validateForm(){
    let f = document.getElementById("numb");
    let n = f.value;

    if(isNaN(n) || n>10 || n<1 ){
        text = "Invalid input!!!"
    }
    else{
        text  = "Verified input"
    }

    document.getElementById("demo").innerHTML = text;
}