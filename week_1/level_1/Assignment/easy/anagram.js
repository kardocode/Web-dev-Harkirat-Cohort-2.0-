// anagram

// easy = aesy


console.log(isAnagram("hello","leh"));


function isAnagram(str1, str2){
    if(str1.length != str2.length){
        return false;
    }
    let str1Arr = str1.toLowerCase().split('').sort().join();
    let str2Arr = str2.toLowerCase().split('').sort().join();

    return str1Arr === str2Arr;
}