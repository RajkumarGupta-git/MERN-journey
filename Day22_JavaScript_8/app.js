let arr=[1,2,3,4,5];

arr.forEach(function (el)  {
    console.log(el);
});

// let print = function(el) {
//     console.log(el);
// } ;

// arr.forEach(print);


let num=[1,2,3,4,5];

let double =num.map((el) => {
    return el*2;
});

let nums = [1,2,3,4,5,6,7,8,9,10,15,12,2,12,11];
let ans =nums.filter((el) => {
    return el % 2 == 0;
});

let max =-1;
for(let i=0;i<arr.length;i++ ){
    if(max<arr[i]) {
        max =arr[i];
    }
}


let maxx =arr.reduce((maxx,el)=> {
    if (maxx<el) {
        return  el;
    }
    else {
        return maxx;
    }
})