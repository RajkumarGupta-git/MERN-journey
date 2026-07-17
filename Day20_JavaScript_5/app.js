function hello () {
    console.log("Hello");
}
hello();




function print1to5() {
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}

print1to5();



function rollDice() {
    let rand = Math.floor(Math.random()*5)+ 1;
    console.log(rand);
}


rollDice();


function printName(name){
    console.log(name);
}
printName("rajKumar");

function sum(a,b) {
    return(a+b);
}

sum(4,5);

let s = sum(4,52);
console.log(s);




function outerFunc() {
    let x = 5;
    let y = 6;
    function innerFunc(){
        console.log(y);
        console.log(x);
    }
    innerFunc();
}

let name ="Raj";

let summ = function(a,b) {
    return a+b;
}

let hlo = function() {
    console.log("Hello");
}