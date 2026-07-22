// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function() {
//     console.log("Button was Clicked");
// };



let btns = document.querySelectorAll("button");

for (btn of btns) {
    // btn.onclick = sayHello;
    // btn.onmouseenter = function () {
    //     console.log("You enter the Button");
    // }

    // btn.onclick = sayName;
    // console.dir(btn);
    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);
}

function sayHello() {
    alert("Hello Coders !");
}

function sayName() {
    alert("EduTechRaj");
}

let p =document.querySelector("p");

p.addEventListener("click", function () {
    console.log("Para was Clicked");
})

let box=document.querySelector(".box");

box.addEventListener("mouseenter", function() {
    console.log("Mouse inside a box");
})