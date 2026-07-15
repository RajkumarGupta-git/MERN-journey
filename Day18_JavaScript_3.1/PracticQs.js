let arrr =[2,6,8,3.5,9,1];
let n =3;
let ans = arrr.slice(0,n);
console.log(ans);

// let ans = arr.slice(arr.length-1);
// console.log(ans);

let st = prompt("please enter a string");
if(st.length == 0) {
    console.log("string is empty");
} else {
    console.log("string is not empty");
}


let str = "EdUtEcHrAj";
let idx = 3;
if(str[idx] == str[idx].toLowerCase()) {
    console.log("character is lowercase");
} else {
    console.log("character is not lowercase");
}


let strr = prompt("please enter a string");
console.log(`original string = ${strr}`);
console.log(`string without spaces = ${strr.trim()}`);


let arr = ["hello", 'a', 23, 64, 99, -6];
let item = 64;
if(arr.indexOf(item) != -1) {
    console.log("element exists in array");
} else {
    console.log("element doesn't exist in array");
}

