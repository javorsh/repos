async.series([function(callback) {
    hitQuery(callback);
}, function(callback) {
    hitQuery(callback);
},
function(callback) {
    hitQuery(callback);
},
function(callback) {
    hitQuery(callback);
},
function(callback) {
    hitQuery(callback);
}
], function done(err, results) {
console.log(results);
process.exit()
});