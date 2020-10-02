const db = require("../data/db-config");

module.exports = {
  find,
  findByUsername,
  addUser,
};

function find() {
  return db("users");
}

function findByUsername(username) {
  return db("users").where({ username });
}

function addUser(newUser) {
  return db("users")
    .insert(newUser)
    .then((res) => {
      return res;
    });
}
