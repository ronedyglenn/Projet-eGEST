// fetch('http://localhost:3500/apprenant')
// .then(res => res.json())
// .then(data => console.log(data));


/**
 * Il s'agit de la programation liée à l'ajout d'un apprenant dans le tableau;
 */

 //Récupération de la photo de profil 
 let photoProfil = document.querySelector('.profile_apprennant')
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
                    <td>${""}</td>
                    <td>${apprenant.nom}</td>
                    <td>${apprenant.prenom}</td>
                    <td>${apprenant.sexe}</td>
                    <td>${apprenant.num_tel}</td>
                    <td>${apprenant.email}</td>
                    <td>${apprenant.date_de_naissance}</td>
                    <td>${apprenant.filiere}</td>
                    <td>${apprenant.niveau}</td>
                    <td>
                        <button class="modify"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                        </svg></button>
                        <button class="drash"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                        </svg></button>
                    </td>
                </tr>
                `)

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
                bouttonModify.addEventListener('click', ()=>{
                    AnnulerModif.classList.remove("modifierProfile")
                })

            })
        console.log(data)

                
        })
    }

    receiveData()
