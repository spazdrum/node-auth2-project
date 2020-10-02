const knex = require("knex");
const knexFile = require("../knexfile");

module.exports = knex(knexfile.development);
