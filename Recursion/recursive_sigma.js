// Recursive Sigma
// Write a recursive function that given a number returns the sum of integers from 1 to that number.
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

function rSigma(num){
    num = Math.floor(num)
    if (num < 1){
        return 0;
    }
    return rSigma(num-1) + num;
}

// console.log(rSigma(5))
// console.log(rSigma(2.5))
// console.log(rSigma(-1))

// Recursive Factorial
// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

function rFact(num){
    num = Math.floor(num)
    if (num < 1){
        return 1;
    }
    return rFact(num-1)*num;
}

console.log(rFact(3))
console.log(rFact(6.5))
console.log(rFact(0))



// Bonus Challenge (Optional)
// Flood Fill
// Most graphical “paint” applications have a ‘paintcan fill’ function that floods part of an image with a certain color. We change the image as if we painted a canvas: a two-dimensional array of integers, where each integer represents a color for that pixel. The canvas Array.length is the Y dimension of our canvas; each spot in the canvas array is a row in our image, with a length equal to our canvas’ X dimension. You are given a canvas (2-dimensional array of integers), starting coordinate (2-element array), and the color to flood (integer value). Build floodFill(canvas2D,startXY,newColor)! Replace a pixel’s color value only if it is the same color as the origin coordinate and is directly adjacent via X or Y to another pixel you will change. 
// Note: diagonally related pixels are not considered adjacent.
// Given canvas2D of:
// … we examine the cells that are directly (not diagonally) adjacent to startXY, which is[2,2]. If any have a value of 3 (the original value at startXY), we change its value to 1 (newColor) and repeat the process with its directly-adjacent neighbor cells. We repeat this until the entire zone of similarly-colored cells is changed.
// Our canvas2D becomes:

function floodFill(canvas2D,startXY,newColor){
    var x = 0
    // if ()
    // if (canvas2D[startXY[0]-1][startXY[1]] != newColor && canvas2D[startXY[0]+1][startXY[1]] != newColor && )
    return false;
}

var canvas2D = [
    [3,2,3,4,3],
    [2,3,3,4,0],
    [7,3,3,5,3],
    [6,5,3,4,1],
    [1,2,3,3,3]
];
var startXY = [2,2];
// console.log(canvas2D[startXY[0]][startXY[1]])
var newColor = 1;
// console.log(floodFill(canvas2D,startXY,newColor))