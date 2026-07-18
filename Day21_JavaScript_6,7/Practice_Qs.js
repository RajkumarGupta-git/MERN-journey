const square= (n)=>n*n;

console.log(square(4)); 


let id = setInterval(() => {
    console.log("Hello World");
},2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("Clear Interval Run");
},10000);


const arrayAverage =(arr)=> {
    let total = 0;
    for(let number of arr) {
        total += number;
    }
    return total/arr.length;
};

let arr=[1,2,3,4,5,6];
console.log(arrayAverage(arr));


let numm =4;
const isEven =(num) => num%2 == 0;