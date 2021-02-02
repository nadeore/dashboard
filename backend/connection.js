var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'ang_dash_pc'
});
connection.connect(function(err) {
    if (err) throw err;
    console.log('You are now connected with mysql database...')
});
module.exports = connection;
