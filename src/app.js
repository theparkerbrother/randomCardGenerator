/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
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

  function setSuitAndValue() {
    let randomSuit = Math.floor(Math.random() * 4);
    let topSuitItem = document.querySelector(".suit");
    console.log(`The selected suit is ${suits[randomSuit].name}.`);
    topSuitItem.classList.add(suits[randomSuit].name);
    topSuitItem.textContent = suits[randomSuit].symbol;

    let bottomSuitItem = document.querySelector(".suit.bottomSuit");
    bottomSuitItem.classList.add(suits[randomSuit].name);
    bottomSuitItem.textContent = suits[randomSuit].symbol;

    let randomValue = Math.floor(Math.random() * 13);
    let mainValueItem = document.querySelector(".mainCardValue");
    mainValueItem.textContent = values[randomValue];
  }

  setSuitAndValue();
};
