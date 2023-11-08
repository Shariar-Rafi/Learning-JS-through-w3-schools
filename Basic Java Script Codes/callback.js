//------JS Callback Concept-----

/*
function display(x){
    console.log(x);
};

function calcu(num1,num2){
    sum = num1 + num2;
    return sum;

};


let result = calcu(2,3);
display(result);
*/

/*
function display(x){
    console.log(x);
};

function calcu(num1,num2){
    sum = num1 + num2;
    display(sum);

};


calcu(2,7)
*/

function display(x){
    console.log(x);
};

function calcu(num1,num2,callback){
    sum = num1 + num2;
    if(callback){
        callback(sum);
    }

};


calcu(2,7,display); // if we dont use that display the console will remain blank

