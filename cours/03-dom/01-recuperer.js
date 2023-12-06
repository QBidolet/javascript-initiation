// 1. Récupérer un élément par ID.
let elementParId = document.getElementById("monId");
console.log(elementParId);

// 2. Récupérer des éléments par leur classe
let elementsParClasse = document.getElementsByClassName("maClasse");
console.log(elementsParClasse);
console.log(elementsParClasse[0]);


// 3. Récupérer des éléments par leur nom de balise
let elementsParBalise = document.getElementsByTagName("div");
console.log(elementsParBalise);
console.log(elementsParBalise[1]);

// 4. Récupérer le premier élément correspondant à un selecteur CSS.
let premierElementParSelecteur = document.querySelector(".maClasse");
console.log(premierElementParSelecteur);

// 5. Récupérer tous les éléments correspondant à un sélecteur CSS.
let tousElementsParSelecteur = document.querySelectorAll(".maClasse");
console.log(tousElementsParSelecteur);

// Toutes ces méthodes sont intégrés directement dans le langage
// et ne nécessite pas de bibliothèque externe comme JQuery.


// getElementBy... renvoit toujours un HTMLElement
// https://developer.mozilla.org/fr/docs/Web/API/HTMLElement

// querySelectorAll renvoit toujours un NodeList
// https://developer.mozilla.org/fr/docs/Web/API/NodeList