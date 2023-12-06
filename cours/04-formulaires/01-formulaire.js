const formulaire = document.getElementById("formulaire");

function handleSubmit(event) {
    event.preventDefault();
    console.log(" est submit");

    const nom = formulaire.elements["nom"].value;
    const selection = formulaire.elements["selection"].value;
    console.log(selection);

    // Cases à cocher
    const case1 = formulaire.elements["check1"];
    const case2 = formulaire.elements["check2"];

    case1.checked = !case1.checked;
  
    
    console.log(case1, case2);

    // Boutons radio
    // let radioValue;
    for (let radio of formulaire.elements['radio']) {
        if (radio.checked) {
            // radioValue = radio.value;
            console.log(radio.value);
        }
    }
    // console.log(radioValue);
}

formulaire.addEventListener("submit", handleSubmit);

// formulaire.addEventListener("submit", (event) => {
//     handleSubmit(event, index, machin, truc);
// });