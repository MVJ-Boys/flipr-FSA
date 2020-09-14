//imports
const express = require("express");
const path = require("path");
const hbs = require("hbs");
require("./db/mongodb");

const app = express();
const port = process.env.PORT || 3000;

//configurations
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
  res.render("index", {
    title: "Home Page",
  });
});

//about page route handler
app.get("/contact", (req, res) =>
  res.render("contact", {
    title: "Contact Page",
  })
);

//notification page router handler
app.get("/notification", (req, res) =>
  res.render("notification", {
    title: "Notification Page",
  })
);

//dashboard page router handler
app.get("/dashboard", (req, res) =>
  res.render("dashboard", {
    title: "Dashboard",
  })
);

app.get("/dashboard/hospitalbeds", (req, res) => {
  res.render("hospitalbeds", {
    title: "Hospital Beds",
  });
});

app.get("/dashboard/medicalbeds", (req, res) => {
  res.render("medicalbeds", {
    title: "Medical Beds",
  });
});

//ratio page router handler
app.get("/ratio", (req, res) =>
  res.render("ratio", {
    title: "Ratio",
  })
);

//404 error code catcher
app.get("*", (req, res) => {
  res.send("Testing 404");
});

app.listen(port, () => [console.log("Server is setup on port " + port)]);
