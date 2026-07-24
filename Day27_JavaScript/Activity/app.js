// let h1 =document.querySelector("h1");
let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click", function () {
    let item=document.createElement("li");
    item.innerText = inp.value;


    let delBtn =document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ul.appendChild(item);
    console.log(inp.value);
    inp.value ="";
});


ul.addEventListener("click", function(event) {
    
    console.log("button clicked");
})

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         // console.log("Element Deleted");
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })

// }