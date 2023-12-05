let bouton = document.querySelector("#monBouton");

// 1. Définition d'un handler (gestionnaire d'événement)
function handleClick(event){
    console.log("Le bouton a été cliqué.")
    event.stopPropagation();
}

// 2. Ecoute de l'événement
bouton.addEventListener("click", handleClick);

// 3. Supprimer l'écoute d'un événement
bouton.removeEventListener("click", handleClick);

// 4. Stopper la propagation de l'évènement
let lien = document.querySelector("#monLien");

function handleClickLien(){
    console.log("Le lien a été cliqué.")
}

bouton.addEventListener("click", handleClick);
lien.addEventListener("click", handleClickLien);

// La gestion d'événement est essentiel pour créer 
// des interactions dynamiques et les contrôler sur une page web.