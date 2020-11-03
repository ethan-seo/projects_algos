function mintoFront(arr){
    var newArr =[];
    var minindex = 0;
    for (var i = 1; i < arr.length; i++){
        if(arr[minindex] > arr[i]){
            minindex = i;
        }
    }
    newArr[0] = arr[minindex];
    var newind = 1;
    for (var i = 0; i < arr.length; i++){
        if(i==minindex){
            newind = 0;
            continue;
        }
        newArr[i+newind]=arr[i]
    }
    return newArr
}
arr = [4,2,1,3,5];
var ans = mintoFront(arr);
console.log(ans);