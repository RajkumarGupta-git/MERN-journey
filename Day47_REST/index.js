const express = require("express");
const app = express();
const port = 2580;
const path = require("path");

const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));
app.use(express.static(path.join(__dirname, "Public")));

let posts = [
    {
        id: uuidv4(),
        username: "raj",
        content: "I love to code"
    },
    {
        id: uuidv4(),
        username: "nikheel",
        content: "I got my first Job."
    },
    {
        id: uuidv4(),
        username: "ravi",
        content: "Achieve Success with my hardwork."
    }
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();

    posts.push({
        id,
        username,
        content
    });

    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;

    let post = posts.find((p) => id === p.id);

    res.render("show.ejs", { post });
});


// EDIT ROUTE
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;

    let post = posts.find((p) => id === p.id);

    res.render("edit.ejs", { post });
});


// UPDATE ROUTE
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let { username, content } = req.body;

    let post = posts.find((p) => id === p.id);

    post.username = username;
    post.content = content;

    res.redirect("/posts");
});


// DESTROY ROUTE
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;

    posts = posts.filter((p) => p.id !== id);

    res.redirect("/posts");
});


app.listen(port, () => {
    console.log("Listening to port :2580");
});