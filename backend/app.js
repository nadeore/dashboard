var express 	= require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var cors        = require('cors');
var mysql       = require('mysql');
var path        = require('path');
var user        = require('./controller/UserController');
var connection = require('./connection');
app.use(cors());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '"Origin, X-Requested-With, Authorization, Content-Type, Accept');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var server = app.listen(3000, "localhost", function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});

    app.use(express.json());
    app.use(bodyParser.json({limit: "50mb"}));
    app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(morgan('dev'));
    app.use(express.static(__dirname+"/dist"));
    app.use(express.static('dist'));
// express router
    var apiRoutes = express.Router();
    app.use('/api', apiRoutes);
    apiRoutes.post('/loginAuth', user.login);

    // app.post( '/createUser' , function ( req , res ) {
    //     const params = {
    //         userType: "2",
    //         name: req.body.name,
    //         email: req.body.email,
    //         password : req.body.password
    //     }
    //     connection.query ( 'INSERT INTO tbl_userdata SET ?' , params , function ( error , results , fields ) {
    //         if ( error ) throw error;
    //         res.end ( JSON.stringify ( results ) );
    //     } );
    // });
    // app.post( '/login' , function ( req , res ) {
    //     var email=req.body.email;
    //     var password=req.body.password;
    //     // const sql = connection.format("SELECT * FROM tbl_userdata WHERE email = ?", [email]);
    //     // console.log(sql);
    //     connection.query('SELECT * FROM tbl_userdata WHERE status =0 AND email = ? ',[email], function (error, results, fields) {
    //         if (error) {
    //             res.json({
    //                 status:false,
    //                 message:'there are some error with query'
    //                 })
    //         }else{
    //             // console.log(results);
    //             if(results.length >0){
    //                 if(password==results[0].password){
    //                     res.json({
    //                         status:true,
    //                         message:'Login successfully',
    //                         userId: results[0].id,
    //                         userType: results[0].userType
    //                     })
    //                 }else{
    //                     res.json({
    //                     status:false,
    //                     message:"Email and password does not match"
    //                     });
    //                 }
    //             }else{
    //                 res.json({
    //                     status:false,
    //                     message:"Email does not exits"
    //                 });
    //             }
    //         }
    //     });
    // });
    //
    // app.get('/getUserList', function (req, res) {
    //     // console
    //     connection.query('select * from tbl_userdata where userType=2 AND status=0', function (error, results, fields) {
    //         if (error) throw error;
    //         res.end(JSON.stringify(results));
    //     });
    // });
    // app.post( '/createProduct' , function ( req , res ) {
    //     const params = {
    //         userId: req.body.userId,
    //         productName: req.body.productName,
    //         productPrize: req.body.productPrize
    //     }
    //     connection.query ( 'INSERT INTO tbl_products SET ?' , params , function ( error , results , fields ) {
    //         if ( error ) throw error;
    //         res.end ( JSON.stringify ( results ) );
    //     } );
    // });
    // app.get('/getProductList', function (req, res) {
    //     // console
    //     connection.query('select * from tbl_products where status=0', function (error, results, fields) {
    //         if (error) throw error;
    //         res.end(JSON.stringify(results));
    //     });
    // });
    //
    // app.get('/getProductListByUser', function (req, res) {
    //     // console
    //     connection.query('select * from tbl_products where userId=2', function (error, results, fields) {
    //         if (error) throw error;
    //         res.end(JSON.stringify(results));
    //     });
    // });
    //
    // app.get('/getUser/:id' , (req, res) => {
    //     connection.query('SELECT * FROM tbl_userdata WHERE id = ?',[req.params.id], (err, rows, fields) => {
    //         if (!err) {
    //             res.send (rows);
    //         }else {
    //             console.log ( err );
    //         }
    //     });
    // });
    //
    // app.get('/getProduct/:id' , (req, res) => {
    //     connection.query('SELECT * FROM tbl_products WHERE id = ?',[req.params.id], (err, rows, fields) => {
    //         if (!err) {
    //             res.send (rows);
    //         }else {
    //             console.log ( err );
    //         }
    //     });
    // });
    //
    // app.put('/updateUser/', function (req, res) {
    //     connection.query('UPDATE `tbl_userdata` SET `name`=?,`email`=?, `password`=? where `id`=?', [ req.body.name, req.body.email, req.body.password, req.body.id], function (error, results, fields) {
    //         if (error) throw error;
    //         res.end(JSON.stringify(results));
    //     });
    // });
    //
    // app.put('/updateProduct/', function (req, res) {
    //     connection.query('UPDATE `tbl_products` SET `productName`=?, `productPrize`=? where `id`=?', [req.body.productName, req.body.productPrize, req.body.id], function (error, results, fields) {
    //         if (error) throw error;
    //         res.end(JSON.stringify(results));
    //     });
    // });
    //
    // app.post('/deleteUser/', function (req, res) {
    //     connection.query('UPDATE `tbl_userdata` SET `Status`=? where `id`=?', [req.body.Status, req.body.id], function (error, results, fields) {
    //         if (error) throw error;
    //         res.end(JSON.stringify(results));
    //     });
    // });
    //
    // app.post('/deleteProduct/', function (req, res) {
    //     connection.query('UPDATE `tbl_products` SET `Status`=? where `id`=?', [req.body.Status, req.body.id], function (error, results, fields) {
    //         if (error) throw error;
    //         res.end(JSON.stringify(results));
    //     });
    // });
app.listen();
console.log('Backend is running on port');
// console.log(connection);
