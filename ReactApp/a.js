//var mysql = require("mysql2");



function test(){
    document.getElementById('result').innerHTML='test';
}


function connectToDB() {
    var mysql = require("mysql2");
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'yavor.sheptoev',
        password: 'yavor.sheptoev1',
        port: '3307',
        database: 'weather',
      });

    con.connect(function (err) {
      if (err) throw err;
    });
    console.log("Connected");
    document.getElementById('result').innerHTML='Mysql Connected';
  }

window.addEventListener('load', test);
//window.addEventListener('load', connectToDB);

