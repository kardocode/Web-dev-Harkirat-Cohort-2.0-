function countVowel(str){
    let check = str.toLowerCase().split('');
    let count = 0;
    for(let i= 0;i<check.length;i++){
        if(check[i] == 'a' || check[i] == 'e' ||check[i] == 'i'||check[i] == 'o' ||check[i] == 'u'){
            count++;
        }
    }
    return count;
}

console.log(countVowel("hello"))