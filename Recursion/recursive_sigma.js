// Recursive Sigma
// Write a recursive function that given a number returns the sum of integers from 1 to that number.
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

function recursiveSigma(num){
    num = Math.floor(num)
    if (num < 1){
        return 0;
    }
    return recursiveSigma(num-1) + num;
}

console.log(recursiveSigma(5))
console.log(recursiveSigma(2.5))
console.log(recursiveSigma(-1))