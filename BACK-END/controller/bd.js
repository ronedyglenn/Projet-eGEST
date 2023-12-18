
const express = require('express')
const mysql = require("mysql2")

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"M@y@y@23",
    database:"apprenant241"
})

connection.connect((error) =>{
    if(error){
        throw error
    }else{
        console.log('connexion établie');
    }
})


module.exports = connection