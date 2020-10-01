var mysql = require("mysql");

var con = mysql.createConnection({
  host: 'localhost',
  user: 'yavor.sheptoev',
  password: 'yavor.sheptoev1',
  port: '3307',
  database: 'weather',
});


function connectToDB() {
  con.connect(function (err) {
    if (err) throw err;
  });
  console.log("Connected");
}





var cityName, icaoCode, synopCode;
function nearestStation(latitude, longitude) {
  sqlStmt =
    "select city,icao, synop, (" +
    latitude +
    "-lat)*(" +
    latitude +
    "-lat)+(" +
    longitude +
    "-lon)*(" +
    longitude +
    "-lon) as distance from stations order by distance limit 1";
  con.query(sqlStmt, function (err, results) {
    if (err) throw err;
    var string = JSON.stringify(results);
    //console.log(">> string: ", string);
    var json = JSON.parse(string);
    cityName = json[0].city; // json[0] -> 1 ред от селекта
    console.log(">> city: ", cityName);
    icaoCode = json[0].icao;
    console.log(">> icao Code: ", icaoCode);
    synopCode = json[0].synop;
    console.log(">> synop Code: ", synopCode);
  });
}
connectToDB();
nearestStation(42.633, 23.366); // Test for Sofia

//window.addEventListener('load', connectToDB);
// document.getElementById('results').innerHTML='Mysql Connected';


