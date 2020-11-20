// Recursive Binary Search
// Given a sorted array and a value, recursively determine whether value is found within array. 

function rBinarySearch(arr,num){
    if (num == arr[Math.floor(arr.length/2)-1]){
        return true;
    }
    else if (num < arr[Math.floor(arr.length/2)-1] && arr.length > 1){
        // console.log("2")
        // console.log(arr.slice(0,Math.floor(arr.length/2)))
        return rBinarySearch(arr.slice(0,Math.floor(arr.length/2)),num)
    }
    else if (num > arr[Math.floor(arr.length/2)-1] && arr.length > 1) {
        // console.log(arr.slice(Math.floor(arr.length/2)))
        return rBinarySearch(arr.slice(Math.floor(arr.length/2),arr.length),num)
    }
    else {
        return false
    }
}
// rBinarySearch([1,3,5,6],4) = false; 
// rBinarySearch([4,5,6,8,12],5) = true.

// console.log(rBinarySearch([1,3,5,6],4))
// console.log(rBinarySearch([4,5,6,8,12],5))



// Greatest Common Factor
// Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:

// gcf(a,b) == a, if a == b;
// gcf(a,b) == gcf(a-b,b), if a>b;
// gcf(a,b) == gcf(a,b-a), if b>a.
// Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. You should  be able to compute rGCF(123456,987654).

function rGCF(num1,num2){
    if (num1 == num2){
        return num1;
    }
    else if (num1 > num2){
        // console.log(num1/num2 % 1 == 0);
        if (num1/num2 % 1 == 0) {
            return num2;
        }
        else {
            return rGCF(num1-num2, num2);
        }
    }
    else {
        if (num2/num1 % 1 == 0) {
            return num1;
        }
        else {
            return rGCF(num1, num2-num1);
        }
    }
}

// console.log(rGCF(9,6));
console.log(rGCF(123456,987654));