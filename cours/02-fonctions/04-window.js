// window est un objet globale représentant la fenêtre du navigateur.
// Toutes les variables et fonctions globales sont des propriétés de window.

window.console.log("Bonjour tout le monde!");

var x = 10;
console.log(window.x);

// Afficher l'url de la page
console.log(window.location.href);

// window.localStorage.setItem("cle", "valeur");
console.log(window.localStorage.getItem("cle"));

// Alert, prompt, confirmation
// window.alert("Alerte !");
// let nom = window.prompt("Entrez votre nom");
// let confirmation = window.confirm("Etes vous sûr ?");

// Dimensions de la fenêtre
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.screenX);
console.log(window.screenY);
