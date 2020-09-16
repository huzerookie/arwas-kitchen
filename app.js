const express = require("express");
const app = express();
const hbs = require("hbs");
const request = require("request");
const port = process.env.PORT || 3000;

//Define paths for Express Config
const path = require("path");
// console.log(__dirname)
console.log(path.join(__dirname));
const publicPathDirectory = path.join(__dirname);
const viewsPath = path.join(__dirname, "/templates/views");
const partialsPath = path.join(__dirname, "/templates/partials");

//Setup Handlerbars engine and view location
app.set("views", viewsPath);
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);
app.use(express.static(publicPathDirectory));

//Index Page
app.get("", (req, res) => {
  res.render("index", {
    title: "Arwa's Kitchen",
    name: "Huzefa",
  });
});

app.listen(port, () => {
  console.log("Server started at port " + port);
});
