const connection = require('../connection');
var moment = require('moment');

exports.addCity = function(req, res, next){
    var created = moment().format('YYYY-MM-DD hh:mm:ss')
    // res.json({created});
    const params = {
        city_name: req.body.city,
        created_at: created
    }
    connection.query('INSERT INTO city_master_tbl SET ?' , params , function ( error , results , fields ) {
        if ( error ) throw error;
        res.json({
            status:true,
            message:'City Added successfully'
        })
    });
}