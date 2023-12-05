// 1. Soustraction
function soustraction(nombre1, nombre2){
    return nombre1 - nombre2;
}
// let resultat = soustraction(9, 5);
console.log(soustraction(9, 5));

// 2.
const tableau = ["pomme", "kiwi", "banane", "cerise"];
console.log(tableau[1]);


// 3.
for (let i = 0; i < tableau.length; i++){
    console.log(tableau[i]);
}

// lectureTableau
function lectureTableau(tableau){
    for (let i = 0; i < tableau.length; i++){
        console.log(tableau[i]);
    }
} 

const nouveauTableau = [1, 2, 3];
lectureTableau(nouveauTableau);