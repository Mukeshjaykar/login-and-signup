const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const collection = require("./mongodb");

// const tempelatePath = path.join(__dirname, "../tempelates");

const PORT = process.env.PORT || 8080;
app.use(express.json());
app.set("view engine", "hbs");

// app.set("views", tempelatePath);
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("login");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const abcd = collection.create({
    name,
    password,
  });
});

app.listen(PORT, () => {
  console.log(`port connect on ${PORT}`);
});
