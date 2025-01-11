/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const mainContainer = document.getElementById("playingBoard");
  mainContainer.appendChild(generateNewCard());

  const addCardButton = document.getElementById("addCardButton");
  addCardButton.addEventListener("click", function() {
    mainContainer.appendChild(generateNewCard());
  });
};

function generateNewCard() {
  const suits = [
    { symbol: "♦", color: "red", name: "diamond" },
    { symbol: "♥", color: "red", name: "heart" },
    { symbol: "♠", color: "black", name: "spade" },
    { symbol: "♣", color: "black", name: "club" }
  ];

  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const suit = Math.floor(Math.random() * 4);
  const cardValue = Math.floor(Math.random() * 13);

  const card = document.createElement("div");
  card.classList.add("card");

  const topSuitItem = document.createElement("div");
  topSuitItem.classList.add("suit", suits[suit].name);
  topSuitItem.innerText = suits[suit].symbol;

  const mainCardValue = document.createElement("div");
  mainCardValue.classList.add("mainCardValue");
  mainCardValue.innerText = values[cardValue];

  const bottomSuitItem = document.createElement("div");
  bottomSuitItem.classList.add("suit", "bottomSuit", suits[suit].name);
  bottomSuitItem.innerText = suits[suit].symbol;

  card.appendChild(topSuitItem);
  card.appendChild(mainCardValue);
  card.appendChild(bottomSuitItem);

  return card;
}
