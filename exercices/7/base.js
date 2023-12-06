let carottes = 0;
let avocats = 0;
let argent = 0;
let prixCarotte = 0.5;
let prixChampCarotte = 10;
let prixChampAvocat = 20;
let nombreChampCarotte = 1;
let nombreChampAvocat = 0;
let revenuAvocat = 4;
let carottesParSeconde = 10;
let avocatsParSeconde = 0;
let intervalCarotte;
let intervalAvocat;
let intervalMiseAJour;

// Fonction pour démarrer la production de carottes
function pousserCarotte() {
    carottes += carottesParSeconde;
}

function pousserAvocat() {
    avocats += avocatsParSeconde;
}

// Fonction pour vendre les légumes
function vendreLegume(){
    argent += carottes * prixCarotte;
    carottes = 0;
    verifierVictoire();
}

// Fonction pour acheter des champs de carottes
function acheterCarotte(){
    if(argent >= prixChampCarotte){
        argent -= prixChampCarotte;
        carottesParSeconde ++;
        nombreChampCarotte ++;
    }
}

// Fonction pour acheter des champs d'avocats
function acheterAvocat(){
    if(argent >= prixChampAvocat){
        argent -= prixChampAvocat;
        avocatsParSeconde += 1/3;
        nombreChampAvocat ++;
    }
}

// Fonction pour mettre à jour l'affichage
function miseAJourAffichage() {
    document.getElementById("messageBoard").textContent = "Carottes : " + carottes + ", Avocats : " + avocats + ", Argent : " + argent;
    document.getElementById("messageBoard").textContent += "\nChamps de carotte : " + nombreChampCarotte + ", Avocats : " + nombreChampAvocat;
    document.getElementById("rentabilite").textContent = "Rentabilité : " + carottesParSeconde * prixCarotte + avocatsParSeconde * revenuAvocat;
    document.getElementById("acheterCarottes").style.display = argent >= prixChampCarotte ? 'block' : 'none';
    document.getElementById("acheterAvocats").style.display = argent >= prixChampAvocat ? 'block' : 'none';
}

// Fonction pour vérifier la victoire
function verifierVictoire() {
   if(argent >= 10) {
    document.getElementById('videoVictoire').style.display = "block";
    alert("Vous avez gagné !");
    clearInterval(intervalCarotte);
    clearInterval(intervalAvocat);
    clearInterval(intervalMiseAJour);
   }
}

function main(){
    // Initialiser l'affichage au démarrage
    miseAJourAffichage();
    document.getElementById("vendreLegumes").addEventListener('click', vendreLegume);
    document.getElementById("acheterCarottes").addEventListener('click', acheterCarotte);
    document.getElementById("acheterAvocats").addEventListener('click', acheterAvocat);

    intervalCarotte = setInterval(pousserCarotte, 1000);
    intervalAvocat = setInterval(pousserAvocat, 1000);
    intervalMiseAJour = setInterval(miseAJourAffichage, 1000/60);
}

// setInterval pour lancer une fonction toutes les X ms.
// exemple : 
// setInterval(uneFonction, 2000)
// va lancer uneFonction toutes les deux secondes.

main();

