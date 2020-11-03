// To Do 1
// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
function pushFront(arr, val){
    var newArr = [val]
    for (var i = 1; i <= arr.length; i++){
        newArr[i] = arr[i-1];
    }
    return newArr;
} 
// var arr =[2,3];
// var val = 1;
// var ans = pushFront(arr, val);
// console.log(ans);

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
function popFront(arr){
    var val = arr[0];
    var newArr = [];
    for (var i = 1; i < arr.length; i++){
        newArr[i-1] = arr[i];
    }
    arr = newArr;
    console.log(arr);
    return val;
}
// var arr = [1,2,3];
// var ans = popFront(arr);
// console.log(ans);

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
function insertAt(arr,ind,val){
    var newArr =[];
    for (var i = 0; i < ind; i++){
        newArr[i] = arr[i];
    }
    newArr[ind] = val;
    for (var i = ind; i < arr.length; i++){
        newArr[i+1] = arr[i];
    }
    return newArr
}
// arr = [1,2,3];
// var ans = insertAt(arr,1,5);
// console.log(ans);



// Remove At
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
function removeAt(arr,ind){
    var newArr =[];
    for (var i = 0; i < ind; i++){
        newArr[i] = arr[i];
    }
    for (var i = ind+1; i < arr.length; i++){
        newArr[i-1] = arr[i];
    }
    return newArr
}
// arr = [1,2,3];
// var ans = removeAt(arr,1);
// console.log(ans);


// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.
function swapPairs(arr){
    var newArr =[];
    for (var i = 0; i < arr.length-1; i+=2){
        newArr[i] = arr[i+1];
        newArr[i+1] = arr[i];
    }
    if (arr.length%2 == 1){
        newArr[arr.length-1] = arr[arr.length-1]
    }
    return newArr
}
// arr = [1,2,3,4,5];
// var ans = swapPairs(arr);
// console.log(ans);


// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

// Second: Solve this without using any nested loops.

function removeDuplicates(arr){
    var newArr =[];
    var j = 0;
    var prev = null;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] != prev){
            newArr[j] = arr[i];
            j++;
        }
        prev = arr[i];
    }
    return newArr
}
arr = [1,1,2,3,4,5,5,5,5,6];
var ans = removeDuplicates(arr);
console.log(ans);