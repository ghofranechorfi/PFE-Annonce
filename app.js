require("dotenv").config();
const express = require("express");
var mysql = require("mysql");
const handlebars = require("express-handlebars");

const app = express();
const port = process.env.PORT;
const path = require("path");

const hbs = handlebars.create({
  layoutsDir: __dirname + "/views/layouts/",
  extname: "hbs",
});
app.use(express.static("public"));
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "PFE-Annonce",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render('main', {layout: 'index'});
});

app.get("/add-Ad", (req, res) => {
  res.render('newad', {layout: 'index'});
});

app.get("/profile", (req, res) => {
  res.render('user', {layout: 'index'});
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
