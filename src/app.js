/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  cardGeneration();
  setInterval(timeCardGen, 1000);
  setInterval(cardGeneration, 10000);
  document.querySelector(".generation").addEventListener("click", () => {
    cardGeneration();
    cardSize();
  });
};

function cardGeneration() {
  //Creacion de cada elemento de la carta
  let numeros_carta = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let palos_types = ["♦", "♥", "♠", "♣"];
  let palo_number = Math.floor(Math.random() * 4);
  let card_number = Math.floor(Math.random() * 13);
  document.getElementsByClassName("palo")[0].innerHTML =
    palos_types[palo_number];
  document.getElementsByClassName("Numero")[0].innerHTML =
    numeros_carta[card_number];
  document.getElementsByClassName("palo")[1].innerHTML =
    palos_types[palo_number];
  if (palo_number == 0 || palo_number == 1) {
    document.getElementsByClassName("palo")[0].style.color = "red";
    document.getElementsByClassName("palo")[1].style.color = "red";
  }
  if (palo_number == 2 || palo_number == 3) {
    document.getElementsByClassName("palo")[0].style.color = "black";
    document.getElementsByClassName("palo")[1].style.color = "black";
  }
}

function cardSize() {
  //Obtener el ancho y largo de la carta
  if (
    document.getElementById("card-width-input").value != "" &&
    document.getElementById("card-height-input").value == ""
  ) {
    document
      .getElementsByClassName("card")[0]
      .setAttribute(
        "style",
        `width: ${document.getElementById("card-width-input").value}px`
      );
  } else if (
    document.getElementById("card-height-input").value != "" &&
    document.getElementById("card-width-input").value == ""
  ) {
    document
      .getElementsByClassName("card")[0]
      .setAttribute(
        "style",
        `height: ${document.getElementById("card-height-input").value}px`
      );
  } else if (
    document.getElementById("card-height-input").value != "" &&
    document.getElementById("card-width-input").value != ""
  ) {
    document
      .getElementsByClassName("card")[0]
      .setAttribute(
        "style",
        `height: ${
          document.getElementById("card-height-input").value
        }px;width: ${document.getElementById("card-width-input").value}px`
      );
  }
}

function timeCardGen() {
  //Temporizador para saber el tiempo transcurrido
  const d = new Date();
  document.getElementById("card-gen-timer").innerHTML = d.toLocaleTimeString();
}
