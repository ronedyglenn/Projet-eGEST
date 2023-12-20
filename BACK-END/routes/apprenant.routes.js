const express = require('express');
const router = express.Router()
const mysql = require('mysql2');
const connection = require('../controller/bd')


router.get('/', (req, res) =>{
    console.log(req.session);
    connection.query("select * from apprenant", (error,data) =>{
        if(error){
            res.status(500).send("erreur de recupérartion de donnée")
        }else{
            res.send(data)
        }
    })
})

router.post('/', (req, res) =>{
    const {nom , prenom, sexe, num_tel, email, date_de_naissance, filiere, niveau} = req.body
    connection.query('insert into apprenant (nom , prenom, sexe, num_tel, email, date_de_naissance, filiere, niveau) values (?,?,?,?,?,?,?,?)',[nom , prenom, sexe, num_tel, email, date_de_naissance, filiere, niveau], (error) =>{
        if(error){
            console.error(error);
            res.status(500).send("erreur de création d'apprenant")
        }else{
            res.send("apprenant crée avec succés")
        }
    })
})

router.put('/:id', (req,res) =>{
    const {Id_apprenant} = req.body
    const { nom , prenom, sexe, num_tel, email, date_de_naissance, filiere, niveau } = req.body
    connection.query('UPDATE apprenant SET nom=? , prenom=?, sexe =?,  num_tel=?, email=?, date_de_naissance=?, filiere=?, niveau=? where Id_apprenant=?', [nom , prenom, sexe, num_tel, email, date_de_naissance, filiere, niveau,Id_apprenant], (error) =>{
        if(error){
            console.error(error);
            res.status(500).send('erreur de modification')
        }else{
            res.send('la modification à été effectué avec succés ')
        }
    })
})

router.delete('/:id', (req,res) =>{
    const {Id_apprenant} = req.params.id
    connection.query('DELETE FROM apprenant where Id_apprenant=?', [req.params.id],(error, data) =>{
        if(error){
            console.log(error);
            res.send("erreur de suppression de l'apprenant ")
        }else{
            res.send("suppression de l'apprenant effectué avec succés")
        }
    })
})

module.exports = router