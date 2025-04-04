// Promise Based Mysql
const mysql2 = require("mysql2");    

let dbconnection = mysql2.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password:process.env.PASSWORD,
    database: process.env.DATABASE,
    connectionLimit: 10,
    port: process.env.PORT,
  });
  

  module.exports = dbconnection.promise()