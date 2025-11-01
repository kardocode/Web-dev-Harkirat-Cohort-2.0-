function isPalindrome(str){
    let check = str.toLowerCase().split('');
    for(let i=0;i<check.length;i++){
        if(check[i] != check[check.length-1-i]){
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("mada"));