/*

//#printing a random integer number between 1-6

//first way
// let dice =  Math.floor(Math.random()*6)+1
// console.log(dice);

//another way
function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max - min +1))+min;
}

console.log(getRandomNumber(1,6));
*/

/*
//how do I sort all student names alphabeticaly of my clssroom
const names = ["Rafi","Ali","Meem","Redowan","Raihan","Engn. Sunny"];
console.log(names.sort())
*/

/*
//how do I sort all student ids of my clssroom in asending order
const ids = [23,58,1,37,59,10,48,45];
SortedIds = ids.sort(
    function(a,b){
        return a -b;
    }
);

console.log(SortedIds);
*/

/*
//leap year detector
function leapYearChecker(year){
    if(year%400===0 || (year%100!==0) && (year%4===0)){
        console.log("Leap Year");
    }
    else{
        console.log("Not A Leap Year");
    }
};

console.log(leapYearChecker(4004));
console.log(leapYearChecker(2100));

*/

/*
//find how many vowels does a sentence have 
const vowels = ["a","e","i","o","u","A","E","I","O","U"];

function countVowels(sentence){
    let count = 0;
    const letters  = Array.from(sentence);
    
    letters.forEach(function (value){
        if(vowels.includes(value)){
            count++;
        }
    })
    return count;

}
console.log(countVowels("I love Bangladesh"));
*/


const numbers = [1,2,3,4,5,5,5,10,4,2,0,10];
const duplicates = numbers.filter(function(value,index,array){
    return  array.indexOf(value)!== index; //duplicate number
});

console.log(duplicates);
