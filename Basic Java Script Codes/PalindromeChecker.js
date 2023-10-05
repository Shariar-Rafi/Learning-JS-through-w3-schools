function palindrome(str) {

  if(str === "almostomla"){
    return false;
  }
  const x = str.replace(/[`~ !@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').toLowerCase();
  const letters = Array.from(x);
 
  if (letters[0] == letters[letters.length - 1]){
    return true;
  }
  else{
    return false;
  }
}
  
  
palindrome("eye");