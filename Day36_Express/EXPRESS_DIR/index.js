const express = require("express");
const app = express();


app.get("/", (req, res)=> {
    res.send("You Contacted root Path");
});





app.get("/apple", (req, res)=> {
    res.send("You Contacted apple Path");
});

app.get("/orange", (req, res)=> {
    res.send("You Contacted orange Path");
});



app.get("/search", (req, res) => {
    console.log(req.query);
    res.send("No Results");
});


app.get("/:username",(req,res)=> {
    console.log(req.params);
    res.send("Hello, I am Root.");
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});


// app.use((req, res) => {
//     // console.log(req);
//     console.log("Request received");
//     // res.send({
//     //     name:"apple",
//     //     color:"red",
//     // });
//     let code ="<h1>Fruits</h1> <ul> <li>Apple</li><li>Orange</li></ul>";
//     res.send(code);
// });