// console.log("Print 1 to 5:> 1,2,3,4,5")

// for(let i=1;i<=5;i++) {
//     console.log(i);
// }

// console.log("Print odd number upto 15:> 1,3,5,7,9,11,13,15")
// for(let i=1;i<=15;i=i+2) {
//     console.log(i);
// }


// console.log("Print even number upto 10 :> 2,4,6,8,10")

// for(let i=2;i<=10;i=i+2) {
//     console.log(i);
// }

// console.log("Print the table to and input from user.")

// let n=prompt("Write your Number");
// n=parseInt(n);
// for(let i=n;i<=n*10;i=i+n) {
//     console.log(i);
// }

// console.log("Nested Loop");


// for(let i=1;i<=3;i++) {
//     console.log("Outer Loop 1\${i}")
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
// }


console.log("While loop to print 1 to 5");

let i=1;
while(i<=5){
    console.log(i);
    i++;
}

console.log("Print the number upto 20");

let j=0;
while(j<=20){
    console.log(j);
    j++;
}


console.log("Break Statement ");

let k=1;
while(k<=15){
    if(k==7){
        break;
    }
    console.log(k);
    k++;
}


console.log("Loops with Array");

let fruits = ["mango", "apple", "banana", "litchi", "orange"];

for(let l=0;l<fruits.length;l++){
    console.log(l,fruits[l]);
}