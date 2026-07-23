// let btn=document.querySelector("button");
// let p=document.querySelector("p");
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");

// btn.addEventListener("click", function() {
//     console.log(this.innerText);
//     this.style.backgroundColor ="blue";
// })

// p.addEventListener("click", function() {
//     console.log(this.innerText);
//     this.style.backgroundColor ="orange";
// })

// h1.addEventListener("click", function() {
//     console.log(this.innerText);
//     this.style.backgroundColor ="aqua";
// })

// h3.addEventListener("click", function() {
//     console.log(this.innerText);
//     this.style.backgroundColor ="red";
// })

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);

// btn.addEventListener("click", function(event){
//     console.log(event);
//     console.log("button clicked");
// });




let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event) {
    console.log("code = ", event.code); //ArrowUp , ArrowDown , ArrowLeft , ArrowRight
    if(event.code == "KeyU") {
        console.log("Character is move Up");
    }
    if(event.code == "KeyD") {
        console.log("Character is move down");
    }
    if(event.code == "KeyL") {
        console.log("Character is move left");
    }
    if(event.code == "KeyR") {
        console.log("Character is move right");
    }
})

// inp.addEventListener("keydown", function(event) {
//     console.log("Key = ",event.key);
//     console.log("Code = ",event.code);
//     console.log("Key was Presses");
// })