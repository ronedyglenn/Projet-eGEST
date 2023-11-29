let popUp = document.querySelector('#pop-up')
let button = document.querySelector(".btn-learner")

button.addEventListener("click", ()=> {
    return declenchement();
})
function declenchement(){
    popUp.classList.toggle('open')
}

const port = process.env.PORT || 3001
