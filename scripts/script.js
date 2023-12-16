const client = async()=>{
    let req = await fetch('https://94d6-41-158-125-192.ngrok-free.app/apprenant')
    let reponse = req.json()
    console.log(reponse);
} 

client()

