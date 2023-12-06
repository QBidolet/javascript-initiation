// Création d'objet simple.

const personne = {
    // Déclaration des attributs.
    nom: "BIDOLET",
    prenom: "Quentin",
    age: 29,

    // Déclaration de méthode
    sePresenter: function() {
        console.log("Bonjour, je m'appelle " + this.nom + " " + this.prenom + " et j'ai " + this.age + " ans.");
    }
    // this fait référence à l'objet courant dans les méthodes.
    // C'est utile pour accéder aux propriétés et méthode de l'objet depuis l'objet lui-même.
};

// Affichage des valeurs.
console.log(personne.nom);
console.log(personne.truc)
console.log(personne);
console.log(personne["prenom"]);

// Modifier les valeurs
personne.age = 30;
console.log(personne.age);
// Ajouter de nouvelles propriétés.
personne.taille = 175;
console.log(personne);
personne.sePresenter();