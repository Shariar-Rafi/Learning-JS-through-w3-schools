/*
// how many "Rafi" words are available in in this sentence & what is the index of first one ?
const sentense = `I am Rafi. Rafi is a good boy.
 Rafi is a bad progammer.
He is 23 years old. rafi lives in Dhaka`;

console.log("First index where Rafi located is "+sentense.indexOf("Rafi")+" .");

let matches = sentense.match(/rafi/igm);

let count  = 0 ;
for (x  in matches) {
   count++;
}
console.log(count);
*/


/*
function linearSearch(arr, value) {
    let ln = arr.length;
    for (let i = 0; i < ln; i++){
        if(arr[i]===value){
            return i;

        } 
    }
    return 'not found!';
}

console.log(linearSearch(['a','b','c','d','c'],'c'));
*/


/*
//(not working)
//find the biggest string from a array and the index number 
function longestString(names){
    let longWord = '';
    for(y of names){
        if(y.length > longWord.length){
            longWord = y;
        }
    }

    return [longWord, names.indexOf(longWord)];
};
longestString(['Shariar Rafi','Rafi','Rafi lives in Dhaka','SR']);
*/

/*
const arr = [];

for(let i=1;i<=100;i++){
    if(i%5===0||i%3===0||(i%5===0&&i%3===0)){
        arr.push(i);
    }
}
console.log(arr);
*/

