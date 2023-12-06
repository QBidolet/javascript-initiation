// class a été introduit avec ES6

export class Personne {
    // Le constructeur : fonction pour initialiser un objet.
    constructor(nom, prenom="Toto", age=30) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    sePresenter() {
        console.log("Bonjour, je m'appelle " + this.nom + " " + this.prenom + " et j'ai " + this.age + " ans.");
    }
}

const johnDoe = new Personne("DOE");
console.log(johnDoe);
johnDoe.sePresenter();


// extends pour hériter
export class Employe extends Personne {
    constructor(nom, prenom, age, poste) {
        super(nom, prenom, age);
        this.poste = poste;
    }

    travailler(){
        // ...
    }
}

const smith = new Employe("SMITH", "John", 25, "Informaticien");
console.log(smith);
smith.sePresenter();


export default Personne;