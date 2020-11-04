// To Do 1
// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".
function removeBlanks(str){
    str = str.split(" ");
    str = str.join("");
    return str
}
// var str = " Pl ayTha tF u nkyM usi c ";
// var ans = removeBlanks(str);
// console.log(ans);


// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.
function getDigits(str){
    str = str.split("");
    var numstr = "";
    for (var i = 0; i < str.length; i++){
        if (!(isNaN(str[i]))){
            numstr = numstr + str[i];
        }
    }
    return parseInt(numstr);
}
// var str = "0s1a3y5w7h9a2t4?6!8?0";
// var ans = getDigits(str);
// console.log(ans);


// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".
function Acronyms(str){
    const regex = /[a-z]/i
    var result = ""; //str.match(regex);
    str = str.split(" ");
    for (var i = 0; i < str.length; i++){
        if(str[i].length > 0){
            result = result + str[i][0].toUpperCase()
        }
    }
    return result;
}
// var str = " there's no free lunch - gotta pay yer way. ";
// var str = "Live from New York, it's Saturday Night!";
// var ans = Acronyms(str);
// console.log(ans);


// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).
function countNonSpaces(str){
    str = str.split(" ");
    str = str.join("");
    return str.length;
}
// var str = "Honey pie, you are driving me crazy";
// var ans = countNonSpaces(str);
// console.log(ans);


// Remove Shorter Strings
// Given a string array and value (length), remove any strings shorter than the length from the array.
function removeShorterStrings(arr,val){
    for (var i = 0; i < arr.length; i++){
        if (arr[i].length < val){
            arr.splice(i,1);
            i--;
        }
    }
    return arr;
}
var arr = ["abc","ab","abcd","2312412"];
var ans = removeShorterStrings(arr,5);
console.log(ans);