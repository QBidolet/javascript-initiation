function verifierMediaQuery() {
    let mediaQuery = window.matchMedia("(min-width: 600px)");

    if (mediaQuery.matches){
        console.log("Ecran de plus de 600 pixel.");
    } else {
        console.log("Ecran de moins de 600 pixel.")
    }
}

function changeBackgroundDiv(){
    const div = document.getElementById("monDiv");
    const mediaQuery = window.matchMedia("(min-width: 600px)");

    if (mediaQuery.matches){
        div.style.backgroundColor = "yellow";
    } else {
        div.style.backgroundColor = "blue";
    }
    
}

// verifierMediaQuery();
window.addEventListener('resize', changeBackgroundDiv);

// https://developer.mozilla.org/fr/docs/Web/CSS/CSS_media_queries/Testing_media_queries