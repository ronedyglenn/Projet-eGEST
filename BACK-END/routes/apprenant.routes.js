const express = require('express');
const router = express.Router()
const mysql = require('mysql2');
const connection = require('..//controller/bd')


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
    const {nom , sexe, date_de_naissance, prenom, email, niveau, activite_extrascolaire, filiere, num_tel } = req.body
    connection.query('insert into apprenant (nom , sexe, date_de_naissance, prenom, email, niveau, activite_extrascolaire, filiere, num_tel) values (?,?,?,?,?,?,?,?,?)',[nom , sexe, date_de_naissance,prenom, email,niveau,activite_extrascolaire , filiere,num_tel], (error) =>{
        if(error){
            console.error(error);
            res.status(500).send("erreur de création d'apprenant")
        }else{
            res.send("apprenant crée avec succés")
        }
    })
})

router.put('/:id', (req,res) =>{
    const {id_apprenant} =req.body
    const {nom , sexe, date_de_naissance, prenom, email, niveau, activite_extrascolaire, filiere, num_tel } = req.body
    connection.query('update apprenant set nom = ? , sexe = ?, filiere = ?, date_de_naissance = ?  prenom =? , email=?, niveau=?, activite_extrascolaire=?, filiere=?, num_tel=? where id= ?', [nom , sexe, date_de_naissance, prenom, email, niveau, activite_extrascolaire , filiere ,num_tel], (error) =>{
        if(error){
            console.error(error);
            res.status(500).send('erreur de modification')
        }else{
            res.send('la modification à été effectué avec succés ')
        }
    })
})

router.delete('/:id', (req,res) =>{
    const {id_apprenant} = req.params
    connection.query('delete from apprenant where id_apprenant = ?', [id_apprenant],(error) =>{
        if(error){
            console.log(error);
            res.send("erreur de suppression de l'apprenant ")
        }else{
            res.send("suppression de l'apprenant effectué avec succés")
        }
    })
})

module.exports = router