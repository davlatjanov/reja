console.log("Running the web server");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");
const data = require("./server");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("Error:", err);
  } else {
    user = JSON.parse(data);
  }
});
const db = require("./server").db();

// 1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing
app.post("/create-item", (req, res) => {
  console.log("user entered /create-item ");

  const reja = req.body.reja;
  db.collection("plans").insertOne({ reja: reja }, (err, data) => {
    if (err) {
      console.log("ERROR", err);
      res.end("something went wrong");
    } else {
      res.json({ test: "Success" });
    }
  });
});
app.get("/", function (req, res) {
  console.log("user entered / ");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log("ERROR:", err);
        res.end("something went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});

app.get("/author", function (req, res) {
  res.render("author", { user: user });
});

module.exports = app;
