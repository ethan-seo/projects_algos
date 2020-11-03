// To Do 2
// Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().
function reverse(arr){
    for (var i = 0; i < arr.length/2; i++){
        let temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
    return arr
}
// var arr = [1,2,4,5];
// var ans = reverse(arr);
// console.log(ans);


// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions.
function rotateArr(arr,shiftBy){
    var len = arr.length;
    arr.length = arr.length + shiftBy;
    console.log(len);
    for (var i = len-1; i >= 0; i--){
        arr[shiftBy+i] = arr[i];
    }
    for (var i = 0; i < shiftBy; i++){
        arr[i] = arr[i+len];
    }
    arr.length = len;
    return arr
}
// var arr = [1,2,3,4];
// var ans = rotateArr(arr,2);
// console.log(ans);

// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.
function rotateArrL(arr,shiftBy){
    var len = arr.length;
    arr.length = arr.length + shiftBy;
    
    for (var i = 0; i < shiftBy; i++){
        arr[len+i] = arr[i];
    }
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i+shiftBy];
    }
    arr.length = len;
    return arr
}
// var arr = [1,2,3,4,5];
// var ans = rotateArrL(arr,2);
// console.log(ans);

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.
function filterRange(arr,min,max){
    var i=0;
    while (i < arr.length){
        if (arr[i] > min && arr[i] < max){
            for (var j = i; j < arr.length-1; j++){
                arr[j] = arr[j+1];
            }
            i--;
            arr.length--;
        }
        i++;
    }
    return arr
}
var arr = [1,2,3,4,5];
var ans = filterRange(arr,1,5);
console.log(ans);


// Concat
// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].
function arrConcat(arr1,arr2){
    var newArr =[];
    for (var i = 0; i < arr1.length; i++){
        newArr[i] = arr1[i];
    }
    for (var i = 0; i < arr2.length; i++){
        newArr[i+arr1.length] = arr2[i];
    }
    return newArr
}
var arr1 = [1,2];
var arr2 = [3,4]
var ans = arrConcat(arr1,arr2);
console.log(ans);