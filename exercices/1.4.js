function lettreAleatoire() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let indiceAleatoire = Math.floor(Math.random() * alphabet.length);
    return alphabet[indiceAleatoire];
}

// 1.
function motAleatoire(nombreLettre) {
    let mot = "";
    for (let i = 0; i < nombreLettre; i++) {
        // const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        // let indiceAleatoire = Math.floor(Math.random() * alphabet.length);
        // mot +=  alphabet[indiceAleatoire];
        mot += lettreAleatoire();
    }
    return mot;
}

// 2. 
function listeAleatoire(nombreMot, nombreLettre) {
    const liste = [];
    for (let i = 0; i < nombreMot; i++) {
        liste.push(motAleatoire(nombreLettre));
    }
    return liste;
}

// 3.
function compterMotsAvecVoyelle(liste) {
    const voyelle = "AEIOUY";
    let compteur = 0;
    for (let i = 0; i < liste.length; i++) {
        // if (voyelle.includes(liste[i][3])){
        //     compteur ++;
        // }
        if (voyelle.indexOf(liste[i][3]) !== -1) {
            compteur++;
        }
    }
    return compteur;
}

console.log(lettreAleatoire());
console.log(motAleatoire(4));
console.log(listeAleatoire(250, 12));


// OPTIONS
// Factorielle

function factorielle(nombre) {
    if (nombre === 0) return 1;
    return nombre * factorielle(nombre - 1);
}

console.log(factorielle(10));

// Nombres premiers
function nombresPremiers(nombre) {
    const premiers = [];
    for (let i = 2; i <= nombre; i++) {
        if (estPremier(i)) premiers.push(i);
    }    
    return premiers;
}

function estPremier(nombre){    
        for (let i = 2; i < nombre; i++) {
            if (nombre % i === 0) {
                return false;               
            }
        }    
    return true;
}

const startTime = new Date().getTime();
const premiers = nombresPremiers(100000);
const elapsedTime = new Date().getTime() - startTime;
console.log("Temps écoulé pour trouver " 
            + "les nombres premiers inférieur à 1 0000 000 : " + elapsedTime + "ms");