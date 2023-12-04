let nombreInvites = prompt("Combien de personnes sont invitées au repas ?  ");
nombreInvites = Number(nombreInvites);
console.log(typeof nombreInvites);
if (nombreInvites < 0) {
    console.log("Le nombre d'invités ne peut pas être négatif !");
} else if (nombreInvites === 1) {
    console.log("C'est une repas en solitaire.");
} else if (nombreInvites <= 4) {
    console.log("C'est un repas intime.");
} else if (nombreInvites <= 12) {
    console.log("C'est un rassemblement.");
} else {
    console.log("C'est un banquet !");
}

// 2
let i = 0;
while (i <= 10) {
    if (i % 2 === 0){
        console.log(i);
    }
    i++;
}

// 3
for (let j = 0; j <= 10; j++){
    if (j % 2 === 0){
        console.log(j);
    }
}

// 4 
let chaineEtoile = "";
for (let k = 0; k < 10; k++) {
    chaineEtoile += "*";
}
alert(chaineEtoile);

// OPTIONS
// 5

 let compteur = 0;
 while(true){
    console.log(compteur);
    compteur++;
    if(compteur === 11) {
        break;
    }
 }

 // rectangle
let chaineRectangle = "";
for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
        chaineRectangle += "*";
    }
    chaineRectangle += "\n";
}
console.log(chaineRectangle);