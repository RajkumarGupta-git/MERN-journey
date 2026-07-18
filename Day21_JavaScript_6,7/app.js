const student = {
    name:"Raj",
    age:20,
    eng:95,
    math:79,
    phy:58,
    getAvg() {
        console.log(this);
        let avg =(this.eng + this.math + this.phy)/ 3;
        console.log(avg);
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

function getAvg() {
        console.log(this);
}


console.log("Hello1");
console.log("Hello2");

let a =5;

try {
    console.log(a);
} catch(err) {
    console.log("Cautch an error ... a is not defined");
    console.log(err);
}
console.log("Hello3");
console.log("Hello4");


const sum =(a, b) => { 
    console.log(a+b); 
}

 const mul = (a,b) => (a*b);

 console.log("Hi There!");

 setTimeout(() =>{
    console.log("EduTechRaj");
 }, 4000);
 console.log("Welcome to")



 let id=setInterval(() =>{
    console.log("EduTechRaj");
 }, 2000);

 console.log(id);

  let id2=setInterval(() =>{
    console.log("Hello Coders!");
 }, 3000);

 console.log(id2);