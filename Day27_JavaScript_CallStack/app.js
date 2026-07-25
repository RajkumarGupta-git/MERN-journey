function hello() {
    console.log("Hello Coders");
}

hello();

function demo(){
    hello();
    console.log("Demo Function");
}

demo();

function one() {
    return 1;
}

function two(){
    return one() + one();
}

function three() {
    let ans =two()+ one();
    console.log(ans);
}

three();


// Synchrous Nature
let a=25;
console.log(a);

let b=10;
console.log(b);
console.log(a+b);



// Asynchrous
setTimeout(()=> {
    console.log("EduTechRaj");
},2000);

setTimeout(()=> {
    console.log("Hello ");
},2500);

console.log("Hello Coders....");


h1=document.querySelector("h1");

function changeColor(color,delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    },delay);
}
setTimeout(()=>{
    h1.style.color="red";
},1000);

setTimeout(()=>{
    h1.style.color="green";
},2000);

setTimeout(()=>{
    h1.style.color="blue";
},3000);

changeColor("red",1000,()=>{
    changeColor("orange",1000 ,()=> {
        changeColor("green",1000);
    });
});

// callbacks Nesting->callback hell 

function savetoDb(data) {
    return new Promise((resolve, reject)=> {
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if (internetSpeed > 4) {
            resolve("Success");
        } else {
            reject("Failure");
        }
    });
}


//Promise Chaining

let request =savetoDb("RajkumarG");
request
    .then(()=> {
        console.log("Promise was resolved");
        return savetoDb("helloworld ")
    })
    .then(()=> {
            console.log("data2 saved");
            return savetoDb("ravi");
        })
        .then(()=> {
            console.log("data3");
        })
    .catch(()=> {
        console.log("Promise was rejected");
    });