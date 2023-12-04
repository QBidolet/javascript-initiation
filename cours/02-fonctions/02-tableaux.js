let fruits = ["pomme", "banane", "cerise"];

let premierFruit = fruits[0];
fruits[1] = "kiwi";
console.log(fruits);

console.log(fruits.length);

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// Ajouter un élément
fruits.push("cerise");

// Vérifier l'appartenance d'une valeur.
fruits.includes("banane");

// Avoir l'indice d'un élément selon sa valeur.
fruits.indexOf("banane");
