let para1 = document.createElement('p');
para1.innerText ="Hey I'm Red!";
document.querySelector('body').append(para1);
para1.classList.add('red');




let h3 = document.createElement('h3');
h3.innerText ="Hey I'm Red h3!";

document.querySelector('body').append(h3);

h3.classList.add('blue');

let div =document.createElement("div");
let h4 =document.createElement("h4");
let para2 =document.createElement("p");

h4.innerText="I'm in a div";
para2.innerText="Me Too!";

div.append(h4);
div.append(para2);

div.classList.add("box");
document.querySelector('body').append(div);




let button =document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click me";

document.querySelector("body").append(input);
document.querySelector('body').append(button);

// 

button.setAttribute("id","btn");
input.setAttribute("placeholder","Username");

// 
let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");


// 

let h1=document.createElement("h1");
h1.innerText= "<ul>DOM Practice</ul>";
document.querySelector("body").append(h1);

// 

let p=document.createElement("p");
p.innerText="Apna College Delta Practice Questions";
document.querySelector("body").append(p);