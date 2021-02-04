let connection = require('../connection');
let jwt         = require('jsonwebtoken');
var tokenexp = '3600';
var secret = 'mysecretkey';
// console.log(connection);
exports.login = function(req, res, next){
        // console.log(req.body);
        var email = req.body.username;
        var password  = req.body.password;
        // const sql = connection.format("SELECT * FROM tbl_userdata WHERE email = ?", [email]);
        // console.log(sql);
        connection.query('SELECT * FROM users_master_tbl WHERE is_delete =0 AND email = ? ',[email], function (error, results, fields) {
            if (error) {
                res.json({
                    status:false,
                    message:'there are some error with query'
                    })
            }else{
                // console.log(results);
                if(results.length >0){
                    if(password==results[0].password){
                        var token = jwt.sign(results[0].id, secret, {
                            // expiresIn: tokenexp
                        });
                        res.json({
                            status:true,
                            message:'Login successfully',
                            user: { userId: results[0].id,
                            userName: results[0].name,
                            token : token }
                        })
                    }else{
                        res.json({
                        status:false,
                        message:"Email and password does not match"
                        });
                    }
                }else{
                    res.json({
                        status:false,
                        message:"Email does not exits"
                    });
                }
            }
        });


    // find the user
    // User.findOne({ contactno: req.body.contactno }, function(err, user) {
    //     // res.json(user);
    //     // console.log(user);
    //     if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }
    //     if (!user) {
    //         res.status(201).json({ success: false, message: 'Incorrect login credentials.' });
    //     }else if (user) {
    //         user.comparePassword(req.body.password, function (err, isMatch) {
    //             // console.log(isMatch);
    //             if (isMatch && !err) {
    //                 var token = jwt.sign(user, config.secret, {
    //                     expiresIn: config.tokenexp
    //                 });
    //                 let last_login = user.lastlogin;
    //                 // login success update last login
    //                 user.lastlogin = new Date();
    //                 user.save(function(err) {
    //                     if(err){ res.status(400).json({ success: false, message:'Error processing request '+ err}); }
    //
    //                     res.status(201).json({
    //                         success: true,
    //                         message: {'userid': user._id, 'username': user.contactno, 'firstname': user.firstname, 'lastlogin': last_login},
    //                         token: token
    //                     });
    //                 });
    //             } else {
    //                 res.status(201).json({ success: false, message: 'Incorrect login credentials.' });
    //             }
    //         });
    //     }
    //});
}
