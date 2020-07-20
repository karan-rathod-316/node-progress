const express = require("express");
const ejs = require("ejs");

//express app - we'll call the express function and assign it to app//
const app = express();

//registering the views engine
app.set("view engine", "ejs");

//listen to the requests//
app.listen(3000);

app.get("/", (req, res) => {
    const blogs = [{ title: 'Blog 1', snippet: "LOrem Ipsum" },
        { title: 'Blog 2', snippet: "LOrem Ipsum" },
        { title: 'Blog 3', snippet: "LOrem Ipsum" }
    ]
    res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "Create a new blog" });
});

//404 setup
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});