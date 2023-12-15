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


//Selection du boutton de suppression
const drashButton = document.querySelector('.drash');
drashButton.addEventListener('click', ()=>{
    if(confirm('Voulez vraiment supprimer un apprenant?')){
        alert("l'apprenant est supprimé");
    }else{
        console.log("Vous n'avez pas confirmé");
    }
})

/**
 * Il s'agit des modifications liées à l'apprenant
 */

let validerModif = document.querySelector('#valider-modif');
let AnnulerModif = document.querySelector('#Annuler-modif');
//Selection du boutton de modification
let bouttonModify = document.querySelector(".modify")
//Section du popUp de modification
let modification = document.querySelector(".modifierProfileFinale")
//Evennemnt
bouttonModify.addEventListener('click', ()=>{
    modification.classList.toggle("modifierProfile")
})
//Retirer la class pour faire disparaite le popUp
.addEventListener('click', ()=>{
    AnnulerModif.classList.remove("modifierProfile")
})