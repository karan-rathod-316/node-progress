const express = require("express");
const ejs = require("ejs");
const morgan = require("morgan") //Morgan is a middleware 

//express app - we'll call the express function and assign it to app//
const app = express();

//registering the views engine
app.set("view engine", "ejs");

//listen to the requests//
app.listen(3000);

// Middleware and static files
app.use(morgan('dev'))
app.use(express.static('public'))


//========Middleware and Next Example===//
// app.use((req, res, next) => {
//     console.log('req is made')
//     console.log(req.hostname)
//     console.log(req.path)
//     console.log(req.method)
//     next(); //An example of middleware **Next ensures that the code doesn't get stuck here and it moves on to the next function, coz app.use would make it stop
// });
//========Middleware and Next Example End===//


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