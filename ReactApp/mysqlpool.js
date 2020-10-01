
  // get the client
var mysql = require("mysql2");

var pool = mysql.createPool({
  connectionLimit: 10, //important
  queueLimit: 0,
  host: '127.0.0.1',
  user: 'yavor.sheptoev',
  password: 'yavor.sheptoev1',
  port: '3307',
  database: 'weather',
  debug: false
});

function hitQuery(callback) {
    var user_query = "select count(*) from bulgaria"

    pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        }

        connection.query(user_query, function(err, rows, fields) {
            if (err) throw err;

            if (rows.length == 0) {
                console.log("No device token found for user: " + 16182);
                callback(null, null);
            } else {
                callback(null, rows[0]);

            }
        });

    });
}


//Promise
async function main() {
    // get the client
    const mysql = require('mysql2/promise');
    // create the connection
    const connection = await mysql.createConnection({host:'localhost', user: 'yavor.sheptoev', database: 'weather'});
    // query database
    const [rows, fields] = await connection.execute('SELECT * FROM bulgaria WHERE `name` = ? ', ['SOFIA']);
  }


 
// get the promise implementation, we will use bluebird
const bluebird = require('bluebird');
 
// create the connection, specify bluebird as Promise
const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'test', Promise: bluebird});
 
// query database
const [rows, fields] = await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'yavor.sheptoev',
    password: 'yavor.sheptoev1',
    port: '3307',
    database: 'weather',
  });
global.db  = Bluebird.promisifyAll(connection);
db.queryAsync("SELECT * FROM bulgaria").then(function(rows){   
  console.log(rows);
});