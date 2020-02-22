const express = require('express');
const router = express.Router();
const mysqlConnection=require('../cnct');
var md5 = require('md5');

exports.create= (req, res) => {
  //console.log(req.body);
    let emp = req.body;
  //  res.send(emp);
  res.send("kfdcx,");
    // let std = req.body;
    // let obj = {};
    // console.log(std.fname);
    // obj = {'firaNAME':std.fname,'lastname':std.lname}
    // console.log(obj);
    // emp.password=md5(emp.password);
    // console.log(emp);
  //res.send(filename);
//     console.log(path);
// //res.send(emp);
  //   mysqlConnection.query('SELECT * FROM users WHERE email = ? OR mob = ?', [req.body.email,req.body.mob], (err, rows, fields) => {
  //     if (rows.length==0){
  //           mysqlConnection.query("INSERT INTO `users` SET ?",[emp],function(err,result){
  //           if (!err){
  //              res.json({"success": true,"message": "Registered Successfully"});
  //           console.log(result);
  //         }
  //       else {
  //         res.json({"success": false,"message": "Register Cancelled"});	
  //           console.log(err);
  //         }
  //       });
  //     }   
  //     else
  //         res.send("email or number already registered");
  // })
  
  }
  
exports.findAll= (req, res) => {
  mysqlConnection.query('SELECT * FROM users', (err, rows, fields) => {
    if (!err)
        res.send(rows);
    else
        console.log(err);
})
}

exports.findById= (req, res) => {
  mysqlConnection.query('SELECT * FROM users WHERE id = ?', [req.params.id], (err, rows, fields) => {
    if (!err)
        res.send(rows);
    else
        console.log(err);
})
}

exports.delete = (req, res) =>{
    mysqlConnection.query('DELETE FROM users WHERE id = ?', [req.params.id], (err, rows, fields) => {
      if (!err)
          res.send('Deleted successfully.');
      else
          console.log(err);
  })
}

exports.update= (req, res) => {
  mysqlConnection.query('UPDATE `users` SET ? WHERE id=?', [req.body, req.params.id], function (err, result, fields) {
    if (!err)
    res.send(result.affectedRows + "row updated" );
else
    console.log(err);
 });
}

exports.login= (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    console.log(req.body);
    if (email && password) {
      mysqlConnection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
        if (results.length > 0) {
          res.json({
              "success": true,
              "message": "Login Successfully",
              
            });
          } 
         else {
          res.json({
              "success": false,
              "message": "Login Cancelled",
               
            });
        }			
        res.end();
      });
    } else {
      res.send('Please enter valid email and Password!');
      res.end();
    }
  }
