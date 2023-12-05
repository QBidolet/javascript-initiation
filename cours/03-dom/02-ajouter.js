// 1. Création d'un élément HTML
let nouveauDiv = document.createElement("p");

// 2. Modification d'un élément
nouveauDiv.textContent = "Bonjour tout le monde!";
nouveauDiv.innerHTML = "<strong>Bonjour tout le monde!</strong>";

// 3. Ajouter l'élément dans le DOM.
document.body.appendChild(nouveauDiv);

// 4. insertBefore pour ajouter un élément juste avant celui spécifié.
let premierEnfant = document.body.firstChild;
document.body.insertBefore(nouveauDiv, premierEnfant);

// 5. Ajouter plusieurs éléments avec une boucle.
for (let i = 0; i < 3; i++){
    let element = document.createElement('p');
    element.textContent = "Paragraphe " + i;
    document.body.insertBefore(element, premierEnfant);
}

// 6. insertAdjacentHTML pour une insertion plus flexible.
// Les positions possibles sont : beforebegin, afterbegin, beforeend, afterend
nouveauDiv.insertAdjacentHTML('beforebegin', '<p>Un paragraphe avant.<p>');