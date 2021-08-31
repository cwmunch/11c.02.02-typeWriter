"use strict";

window.addEventListener("DOMContentLoaded", clearHTML);

const getText = document.querySelector(".typewritten").textContent;
let letters = 0;

//run clearHTML
function clearHTML() {
  console.log("clearHTML");
  document.querySelector(".typewritten").textContent = "";

  loop();
}

//run loop and end it
function loop() {
  console.log("loop");

  //if numbers of letters is smaller that text length, then itterate letters one for one
  if (letters < getText.length) {
    document.querySelector(".typewritten").textContent += getText.charAt(letters);
    letters++;
    setTimeout(loop, 150);
  }
}
