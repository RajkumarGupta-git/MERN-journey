function getMin(nums) {
    let min = nums.reduce((min,el)=> {
    if (min < el) {
        return min;
    } else {
        return el;
    }
    });

    console.log(min);
}

// 2
let nums = [10,20,30,40];
let ans =nums.every((el) => el %10 == 0);

console.log(ans);

// 3

const square = nums.map((num) => num*num);
console.log(square);

let sum = square.reduce((acc, cur) => acc +cur , 0);

let avg =sum/nums.length;
console.log(avg);


// 4

let numbers =[2,4,6,8,-2,-4];
console.log(numbers.map((number) => number + 5));


// 5


let words = ["raj", "kumar", "gupta"];

let upperWords = words.map((word) => word.toUpperCase());

console.log(upperWords);

// 6

const mergeObjects = (obj1, obj2) => ({
    ...obj1,
    ...obj2
});

console.log(
    mergeObjects({a:1, b:2}, {c:3, d:4})
);

// 7
const doubleAndReturnArgs = (arr, ...args) => [...arr,...args.map((v) =>v *2),];

doubleAndReturnArgs([1,2,3],4,4);
doubleAndReturnArgs([2],10,4);