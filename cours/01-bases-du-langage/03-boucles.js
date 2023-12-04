// 1. Boucle for
// Pour exécuter des instructions un nombre déterminé de fois.

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(i, j);
    }
}

// 2. Boucle while
// Pour exécuter des intructions un nombre indéfini de fois.
let k = 0;
while (k < 5 ){
    console.log(k);
    k++;
}

// 3. Boucle do ... while
// Similaire à while mais le bloc de code est exécuté au moins une fois.
let l = 0;
do {
    console.log(l)
    l++;
} while(l < 5);

// 4. Boule for ... in
// Parcourir un objet
const objet = {a: 1, b:2, c: 3};
for (let cle in objet) {
    console.log(cle + ' : ' + objet[cle]);
}

// 5. Boucle for ... of
// Parcourir itérable.
const toto = "toto";
for (let valeur of toto){
    console.log(valeur);    
}

