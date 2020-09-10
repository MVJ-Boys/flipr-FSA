//imports
const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT || 3000;

//configuretions
const publicFolder = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partials = path.join(__dirname, "../templates/partials");

app.use(express.static(publicFolder));

//hbs config's
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partials);

//home page route handler
app.get("/", (req, res) => {
  res.render("index");
});

//about page route handler
app.get("/about", (req, res) => res.render("about"));

//404 error code catcher
app.get("*", (req, res) => {
  res.send("Testing 404");
});

app.listen(port, () => [console.log("Server is setup on port " + port)]);
