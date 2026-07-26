// async function greet() {
//     throw "404 page not found";
//     return "hello";
// }



// greet()
//     .then((result)=> {
//         console.log("Promise was resolved");
//         console.log("result was: ", result);
//     })
//     .catch((err)=> {
//         console.log("Promise wasrejected with error : ",err);
//     });


// let demo = async() => {
//     return 5;
// };

function getNum(){
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
        
    });
    // console.log(5);

}

async function demo() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}

h1 = document.querySelector("h1");

function changeColor(color,delay) {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            let num=Math.floor(Math.random()*5)+1;
            if (num >3) {
                reject("Promise Rejected");
            }

            h1.style.color =color;
            console.log(`color cahnged to${color}!`);
            resolve("Color Changed!");
        },delay);
    })
}

async function demoo() {
    try {
        await changeColor("red",1000);
        await changeColor("orange",1000);
        await changeColor("green",1000);
        await changeColor("blue",1000);
    } catch(err) {
        console.log("Error Catch");
        console.log(err);
    }



    let a=5;
    console.log(a);
    console.log("New number = ",a +3);
}


let obj = {
    b: undefined,
}

