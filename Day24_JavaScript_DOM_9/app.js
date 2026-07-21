// let smallImages = document.getElementsByClassName("oldImg");

// for(let i=0;i<smallImages.length;i++){
//    smallImages[i].src="assets/Spider-Man.png";
//     console.dir(`Value of image no. ${i} is changed.`);
// }

// console.dir(document.querySelector("h1"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelector("div a"));

// console.dir(document.querySelectorAll("p"));

let links = document.querySelectorAll(".box a");

for(link of links) {
    link.style.color ="purple";//Inline Style
}

// for(let i = 0 ; i < links.length; i++ ){
//     links[i].style.color="green";
// }