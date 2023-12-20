/**
 * Il s'agit de la programation liée à l'ajout d'un apprenant dans le tableau;
 */

 //Récupération de la photo de profil 
 let photoProfil = document.querySelector('.profile_apprennant')
 // lien de la photo de profile
 let photoLink = photoProfil.src = "../src/images/téléchargement.jpg"
//recupération de la valeur Nom;
let nom = document.querySelector("#nom");
//recupération de la valeur prenom;
let prenom = document.querySelector("#prenom");
//recupération de la valeur sexe;
let sexe = document.querySelector("#sexe");
//recupération de la valeur numéro de téléphone;
let num_tel = document.querySelector("#Number");
//recupération de la valeur email;
let email = document.querySelector("#email");
//recupération de la valeur date de naissance;
let date_de_naissance = document.querySelector("#date");
//recupération de la valeur Filiere;
let filiere = document.querySelector("#filiere");
//recupération de la valeur niveau;
let niveau = document.querySelector("#niveau");


//Ajout de toutes les données dans la;
async function poster_les_apprenanats(){
    await fetch('http://localhost:3500/apprenant', {
        method: 'POST',
        headers: {
            "content-type" : "application/json",
        },
        body: JSON.stringify({
            nom:  nom.value,
            prenom: prenom.value,
            sexe: sexe.value,
            num_tel: num_tel.value,
            email: email.value,
            date_de_naissance: date_de_naissance.value,
            filiere: filiere.value,
            niveau: niveau.value,
        }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
}

//ajout d'un evenement sur le boutton d'ajout d'un appranant;
    
        
        //recupération du boutton de validation du formulaire d'ajout d'un apprenant;
        let ajouter_Apprenant = document.querySelector('.ajouterApprenant');
        ajouter_Apprenant.addEventListener('click', (e)=>{
            // e.preventDefault();
            console.log(nom.value, prenom.value, sexe.value, num_tel.value, email.value, date_de_naissance.value, filiere.value, niveau.value);

                //Retournons la function pour les Posts des apprenants
                return poster_les_apprenanats() 
        })
        
    async function receiveData(){

    await fetch('http://localhost:3500/apprenant')
    .then(resultat => resultat.json())
    .then(data => {

        //recuperation de la balise tr
        let tbody = document.querySelector("tbody")
        
        data.map(apprenant =>{
                tbody.innerHTML += (`
                <tr>
                    <td>${apprenant.Id_apprenant}</td>
                    <td><img src="../src/images/téléchargement.jpg" alt="" class="coach-profile"></td>
                    <td>${apprenant.nom}</td>
                    <td>${apprenant.prenom}</td>
                    <td>${apprenant.sexe}</td>
                    <td>${apprenant.num_tel}</td>
                    <td>${apprenant.email}</td>
                    <td>${apprenant.date_de_naissance}</td>
                    <td>${apprenant.filiere}</td>
                    <td>${apprenant.niveau}</td>
                    <td>
                        <button class="modify ${apprenant.Id_apprenant}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                        </svg></button>
                        <button class="drash ${apprenant.Id_apprenant}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                        </svg></button>
                    </td>
                </tr>
                `)
                
                
                         //Selection du formulaire de connexion
        const form = document.querySelector('.formulaire2')
        
        /**
         * Selection des différents champs
        */
       let nom = document.querySelector("#Nom1")
       let prenom = document.querySelector("#Prenom1")
       let num_tel = document.querySelector("#Number1")
       let sexe = document.querySelector("#sexe1")
       let email = document.querySelector("#email1")
       let date_de_naissance = document.querySelector("#date1")
       let filiere = document.querySelector("#filiere1")
       let niveau = document.querySelector("#Niveau1")
       
       //les boutons du formulaire de modification
       
       let bouton1 = document.getElementById("valider-modif")
       let bouton2 = document.getElementById("Annuler-Modif")
       
       

       let modifyButton = document.querySelectorAll(".modify")
                modifyButton.forEach(elem =>{
                    elem.addEventListener('click', ()=>{
     
       //div Parent du formulaire
       let parentForm = document.querySelector('.modifierProfileFinale')
       parentForm.classList.toggle('modifierProfile')

       bouton2.addEventListener('click', ()=>{
        parentForm.classList.remove("modifierProfile")
       })

       //Récupération du bouton modify
       bouton1.addEventListener('click', ()=>{
        fetch("http://localhost:3500/apprenant/" + elem.classList[1], {
            method: "PUT",
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify({
            Id_apprenant: elem.classList[1],
            nom:  nom.value,
            prenom: prenom.value,
            sexe: sexe.value,
            num_tel: num_tel.value,
            email: email.value,
            date_de_naissance: date_de_naissance.value,
            filiere: filiere.value,
            niveau: niveau.value,
            })
        })
        .then(data => data.json())
        .then(data => console.log(data))
       })
                    })
                })
                //Selection du boutton de suppression
                let drashButton = document.querySelectorAll(".drash");
                drashButton.forEach(el=>{
                    el.addEventListener('click', ()=>{
                        console.log(el.classList[1]);
                        if(confirm('Voulez-vous vraiment supprimer ?')){
                            fetch('http://localhost:3500/apprenant/'+ el.classList[1], {
                                method: 'DELETE',
                            })
                            .then(response => response.text())
                            .then(data => console.log(data))
                        }else{
                            console.log("Vous n'avez pas supprimé !");
                        }
                    })
                })
                
            })
        console.log(data)

                
    })
}
    receiveData()

    // async function postData(){
       
    // }
