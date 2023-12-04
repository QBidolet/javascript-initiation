// 1. Déclaration d'une fonction
function saluer() {
    console.log("Bonjour !");
}

// 2. Appel de la fonction
saluer();

// 3. Paramètres
function dire_bonjour(nom) {
    console.log("Bonjour " + nom + " !");
}

dire_bonjour("Alice");

// 4. Fonction avec retour
function additionner(a, b) {
    return a + b;
}

let resultat = additionner(2, 3);
console.log(resultat);
