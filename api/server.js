const express = require("express");
const db = require("../schemes/schemes");
const bcrypt = require("bcryptjs");
const jwt = require("../utilities/token");
const auth = require("../utilities/auth");
const server = express();

server.use(express.json());

module.exports = server;

server.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to JSON Web Tokens API!" });
});

server.post("/signup", (req, res) => {
  const newUser = {
    ...req.body,
    password: bcrypt.hashSync(req.body.password, 10),
  };
  db.addUser(newUser)
    .then((rep) => {
      res.status(201).json({ userID: rep[0] });
    })
    .catch((err) => {
      res.status(500).json({ message: `Server Error! ${err}` });
    });
});
