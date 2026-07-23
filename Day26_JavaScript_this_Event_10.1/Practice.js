let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     // console.dir(form);


//     // let user = document.querySelector("#user");
//     // let pass = document.querySelector("#pass");

//     let user = this.elements[0];
//     let pass = this.elements[1];

//     console.log(user.value);
//     console.log(pass.value);
    
//     alert(`Hi ${user.value}, Your Password is set to ${pass.value}`);
// });

let user = document.querySelector("#user");

form.addEventListener("submit", function(event) {
    event.prevent.Default();
});

user.addEventListener("change",function() {
    console.log(" changed event");
    console.log("final value = ", this.value)
});

user.addEventListener("input",function() {
    console.log("input ");
    console.log("final value = ", this.value)
});