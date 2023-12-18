/**
 * Modifications liées au profile lorsqu'il s'agira d'ajouter un apprennant
 */

//Sélection de l'image de profile
const profile = document.querySelector(".profile_apprennant");
//récupération de la valeur de l'input *file
const inputValue = document.querySelector("#btn-profile_apprennant");
//Evennement qui permet de changer la photo de profile
inputValue.addEventListener('change', ()=>{
    profile.src= URL.createObjectURL(inputValue.files[0]);
    
})

/**
 * Affichage du PopUp
 */

let ajouterApprenant = document.querySelector('.btn-learner')
//selection du body
let popUp = document.querySelector('.popUp_containerMove')
//Sélection du boutton pour frmer le popUp
let bouttonFermer = document.querySelector('#Annuler')
//ajout de l'évènement sur le boutton ajouter un apprennant.
ajouterApprenant.addEventListener('click', ()=>{
    popUp.classList.toggle('popUp_container');

})

//Fermeture du popUp
bouttonFermer.addEventListener('click', ()=>{
    popUp.classList.remove('popUp_container');

})

/**
 * Confirmation et suppréssion d'un apprenant.
 */


