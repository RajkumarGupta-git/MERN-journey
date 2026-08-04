const express =require("express");
const app =express();
const path=require("path");

const port =8000;
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));

app.get("/",(req,res)=> {
    res.render("home.ejs");
});

app.get("/ig/:username", (req, res) => {
    const { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];

    
    if (!data) {
        return res.send("User not found");
    }
    res.render("instagram", { data });
});


app.get("/hello", (req, res) => {
    res.send("hello");
});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice", { diceVal });
});



app.listen(port,()=> {
    console.log(`Listening on port ${port}`);
});