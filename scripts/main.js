const myHeading = document.querySelector("h1");
myHeading.textContent = "Bob!";

myHeading.textContent = "Bob!" + " Joooo es ist Bob";



const myImage = document.querySelector("#cat");
const myImage2 = document.querySelector("#hand");
const anzahl = document.querySelector("#anzahl")
let gestreichelt = 0

myImage.onclick = () => {
  if (myImage2.style.visibility === "hidden") {
    myImage2.style.visibility = "visible";
    gestreichelt += 1
    anzahl.innerHTML = gestreichelt
  } else {
    myImage2.style.visibility = "hidden";
  }
};
