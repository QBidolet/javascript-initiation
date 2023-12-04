// 1. if

let age = 20;
if (age > 18) {
    console.log("Vous êtes un adulte.");
}

// 2. else

if (age < 18) {
    console.log("Vous êtes un mineur.");
} else {
    console.log("Vous êtes un adulte.");
}

// 3. else if
if (age < 13) {
    console.log("Vous êtes un enfant.")
} else if (age < 18){
    console.log("Vous êtes un adolescent.")
} else {
    console.log("Vous êtes un adulte.")
}

// 4. Opérateur ternaire.
let type = age >= 18 ? "adulte" : "mineur"
console.log("Vous êtes un " + type);

// 5. Switch
let fruit = "pomme";
switch (fruit) {
    case "banane":
        console.log("C'est une banane.");
        break;
    case "pomme":
        console.log("C'est une pomme.");
        break;
    default:
        console.log("Ce n'est ni une pomme ni une banane.");
}

