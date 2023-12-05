// 1. Fonction anonyme basique
// C'est une fonction sans nom.

const direBonjour = () => {
    console.log("Bonjour");
}

// 2. Fonction anonyme en tant qu'argument
function appelerFonction(fonction) {
    fonction();
}

direBonjour();
appelerFonction(direBonjour);
setTimeout(() => { console.log("Message affiché après 2 secondes.") }, 2000);

// 3. Fonction anonyme dans les méthodes "forEach", "map", "filter" etc.
let nombres = [1, 2, 3, 4, 5];
nombres.forEach((nombre) => { console.log(nombre) });
const nombresPairs = nombres.filter((nombre) => nombre % 2 === 0);
const nombresDoubles = nombres.map((nombre) => nombre * 2);

console.log(nombresPairs);
console.log(nombresDoubles);


// 4. Fonction immédiate

(() => {
    console.log("Fonction immédiate");
})();