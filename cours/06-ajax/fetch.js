// Fonction asynchrone pour récupérer des données depuis l'API SWAPI.

async function chargerDonnees() {
    const apiUrl = "https://swapi.dev/api/people/1/";
    const dataDiv = document.getElementById("data");

    try {
        // fetch va interroger le serveur. await va attendre une répondre avant de continuer.
        const reponse = await fetch(apiUrl);
        if (!reponse.ok) {
            // ...
            console.error("L'api ne s'est pas appelé correctement.");
        }
        const data = await reponse.json();
        console.log(data);

        dataDiv.textContent = `Nom : ${data.name}. Taille : ${data.height}, Date de naissance: ${data.birth_year}`;     
        console.log("Données chargées.")
    } catch (error) {
        console.error("Fetch error :", error);
        dataDiv.textContent = "Erreur lors du chargement des données, veuillez réessayer plus tard.";      
    }
   }

function chargerDonnees2() {
    const apiUrl = "https://swapi.dev/api/people/1/";
    const dataDiv = document.getElementById("data");

    try {
        // fetch va interroger le serveur. await va attendre une répondre avant de continuer.
        fetch(apiUrl).then((reponse) => {
            if (!reponse.ok) {
                console.error("L'api ne s'est pas appelé correctement.");
            }
            reponse.json().then((data) => {
                dataDiv.textContent = `Nom : ${data.name}. Taille : ${data.height}, Date de naissance: ${data.birth_year}`;     
                console.log(data);
            });
        });      

    } catch (error) {
        console.error("Fetch error :", error);
        dataDiv.textContent = "Erreur lors du chargement des données, veuillez réessayer plus tard.";      
    }
}

chargerDonnees2();
console.log("Données envoyés.")
