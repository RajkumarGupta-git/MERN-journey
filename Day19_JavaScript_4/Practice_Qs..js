// Delete the occurances of element
let arr = [1,28,31,4,7,2,9,67];
let num =2;
for(let i=0;i<arr.length;i++){
    if(arr[i] == num){
        arr.splice(i,1);
    }
}

console.log(arr);



// find the total digit in number
let number= 287152;
let count= 0;
let copy = number;
while( copy> 0) {
    count++;
    copy=Math.floor(copy/10);
}
console.log(count);




// Sum of the digits in a number

// let number= 28997152;
// let sum= 0;
// let copy = number;
// while( copy> 0) {
//     digital=copy%10;
//     sum+=digital;
//     copy=Math.floor(copy/10);
// }
// console.log(sum);



// factorial of 5=120.

let n=5;
let factorial = 1;

for(let i=1;i<=n;i++){
    factorial *= i;
}
console.log(`Factorial of ${n} is ${factorial}`);

// find largest number which is positive 

// let ar =[2,5,20,3,98,34,66,34,92];
// let largest =0;
// for(let i=0;i<=ar.length;i++){
//     if(largest < ar[i]){
//         largest =ar[i];
//     }
// }
// console.log(largest);



// Ludo Dice 1 to 6 

let dice = Math.floor (Math.random() * 6 )+1;

console.log(dice);