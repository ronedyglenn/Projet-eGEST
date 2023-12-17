
function recuperation(){
    fetch('https://c6e6-102-142-98-3.ngrok-free.app/apprenant')
    .then(res => {
        if(!res.ok){
            console.log("probème");
            return;
        }
        return res.json()
    })
    .then(data => console.log(data))
    .catch(error =>{
        console.log(error);
    })
}

recuperation()
