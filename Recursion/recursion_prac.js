function countdown(){
    for(var i=1; i<6; i++){
        console.log(i)
    }
}
// countdown()

function countdownRec(i){
    if (i==6){
        return "Function's done!";
    }
    console.log(i)
    return countdownRec(i+1)
}

console.log(countdownRec(1))