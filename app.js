// let jsonRes = `{"fact":"Cats with long, lean bodies are more likely to be outgoing, and more protective and vocal than those with a stocky build.","length":121}`;

// // console.log(jsonRes);

// let validRes =JSON.parse(jsonRes);
// console.log(validRes.fact);


// let student = {
//     name:"raj",
//     marks:92,
// };

let btn=document.querySelector("button");

btn.addEventListener("click",async ()=> {
    // console.log("Button was clicked");
    let fact =await getFacts();
    console.log(fact);
    let p= document.querySelector("#result");
    p.innerText = fact;
});

let url ="https://catfact.ninja/fact/";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("error - ",e);
        return "No fact found";
    }
}