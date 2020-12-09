//List databases of query from

const Pool = require("pg").Pool;

//Common user to query the main database
const mainpoolcommonquery = new Pool({
  user: "commonuser",
  host: "common.cecxfun782s2.us-east-2.rds.amazonaws.com",
  database: "STCharacters",
  password: "password",
  port: 5432,
});

//Common user to mutate the main database
const mainpoolcommonmutate = new Pool({
  user: "commonuser",
  host: "main.cecxfun782s2.us-east-2.rds.amazonaws.com",
  database: "STCharacters",
  password: "password",
  port: 5432,
});

//export the pools
exports.mainpoolcommonquery = mainpoolcommonquery;
exports.mainpoolcommonmutate = mainpoolcommonmutate;
