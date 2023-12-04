// 1. Syntaxe de base

let age = 25;
age = 26;

const nom = "Alice";
// nom = "Bob"; // Génère une erreur.

// var : ancienne méthode de déclaration
var ville = "Paris";
ville = "Lyon";

// let et const ont une portée de bloc

if (true) {
    let ville = "Marseille";
}
console.log(ville);

// 3. Hoisting (remontée)
hoisted = "Je suis hoistée";
console.log(hoisted);

var hoisted = "Je suis hoistée";

// Conclusion :
// - Utilisez let et const le plus possible.
// - Préférez const pour des variables dont la valeur ne change pas.