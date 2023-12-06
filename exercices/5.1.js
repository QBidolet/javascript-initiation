class Moto {
    constructor(marque, modele, couleur, prix) {
        this.marque = marque;
        this.modele = modele;
        this.couleur = couleur;
        this.prix = prix;
    }

    description() {
        console.log(`Une moto ${this.marque} ${this.modele} de couleur ${this.couleur} qui coute ${this.prix} euros.`);
    }

    // setter
    repeindre(couleur) {
        this.couleur = couleur;
        this.description();
    }
}

class GarageMotos {
    constructor(){
        this.motos = [];
        this.valeurStock = 0;
    }

    ajouterMoto(moto){
        if(moto instanceof Moto) {
            this.motos.push(moto);
        } else {
            console.log("Ce n'est pas une moto");
        }
    }

    inventaire(){
        // boucle
        this.motos.forEach((moto) => moto.description());
        // for (let i = 0; i< this.motos.length; i++){
        //     this.motos[i].description();
        // }
    }
    
    calculerValeurStock(){
        this.valeurStock = 0;
        for (let i = 0; i< this.motos.length; i++){
            this.valeurStock += this.motos[i].prix;
        }
        console.log("La valeur du stock est de " + this.valeurStock + " euros.");
    }
}

const yamaha = new Moto("Yamaha", "ZF41", "bleu", 20000);
const ducati = new Moto("Ducati", "ZDSD", "rouge", 25000);
// yamaha.repeindre("verte");
const garage = new GarageMotos();
garage.ajouterMoto(ducati);
garage.ajouterMoto(yamaha);
garage.inventaire();
garage.calculerValeurStock();
garage.calculerValeurStock();