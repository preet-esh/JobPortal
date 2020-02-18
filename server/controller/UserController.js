const express = require('express');
const router = express.Router();
const keys = require('../config/keys');
const mysqlConnection=require('../cnct');

exports.create= (req, res) => {
  
  console.log(req.body);
    let emp = req.body;
     console.log(emp);
    const fname = emp.fname ? emp.fname : "";
    const lname = emp.lname ? emp.lname : "";
    const FullName = emp.FullName ? emp.FullName : "";
    const email = emp.email ? emp.email : "";
    const file = emp.file ? emp.file : "";
    const tele = emp.tele ? emp.tele : "";
    const industry = emp.industry ? emp.industry : "";
    const password = emp.password ? emp.password : "";
    const catagary=emp.catagary ? emp.catagary : "";
    const role=emp.role ? emp.role :"";

    mysqlConnection.query("INSERT INTO `users`(`fname`, `lname`, `email`, `pro_pic`, `mob`, `password`, `FullName`, `Industry`, `categary`, `role`, `status`) VALUES (?,?,?,?,?,?,?,?,?,?,?)", [fname,lname, email,file,tele,password,FullName,industry,catagary,role,'0'],function (err,result){
        if (!err)
        res.send(result.affectedRows + "row inserted" );
    else{
      res.send("error storing data!!!");
        console.log(err);}
    });
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
  mysqlConnection.query('UPDATE `users` SET `fname`=?,`lname`=?,`email`=?,`password`=? WHERE id=?', [req.body.fname,req.body.lname,req.body.email, req.body.password, req.params.id], function (err, result, fields) {
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
          res.json
            ({
              "success": true,
              "message": "Register Successfully",
               "data":{}
            });
          } 
          
         else {
          res.json
            ({
              "success": false,
              "message": "Register Cancelled",
               "data":{}
            });
        }			
        res.end();
      });
    } else {
      res.send('Please enter email and Password!');
      res.end();
    }
  }
