// 1. Modifier directement le style d'un élément.
 let element = document.querySelector(".maClasse");
// let elements = document.querySelectorAll(".maClasse");

element.style.color = "blue";
element.style.backgroundColor = "yellow";

// 2. Modifier la classe CSS d'un élément.
// for (let i = 0; i < elements.length; i++){
//     elements[i].classList.add("nouvelleClasse");
//     console.log(elements)
// }
// element.classList.add("nouvelleClasse");
// element.classList.remove("maClasse");
// element.classList.toggle("nouvelleClasse");
element.classList.replace("maClasse", "nouvelleClasse");

// Tester si valeur existe
let contientClasse = element.classList.contains("maClasse");
console.log(contientClasse);

// setAttribute
element.setAttribute("style", "color: green; border: 1px solid black;");

// getComputedStyle pour obtenir tous les styles appliqués à l'élément.
let styles = window.getComputedStyle(element);
console.log("Hauteur :", styles.height);