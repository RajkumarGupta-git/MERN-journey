// Ans:1
function calcAvg(a,b,c){
    let avg =(a+b+c)/3;
    console.log(avg);
}

calcAvg(2,4,6);

// Ans:2

function getSum(n) {
    let sum=0;
    for(let i=1;i<=n;i++){
    sum += i;
}

return sum;
}
// Ans:3

let str=["hi","hello","bye","!"];

function concat(str){
    let result;

    for(let i=0;i<str.length;i++){
        result += str[i];
    }
    return result;
}