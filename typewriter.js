"use strict";

window.addEventListener("DOMContentLoaded", clearHTML);

const getText = document.querySelector(".typewritten").textContent;
let n = 0;

//run clearHTML
function clearHTML() {
  console.log("clearHTML");
  document.querySelector("#typewriter").textContent = "";

  loop();
}

//run loop
function loop() {
  console.log("loop");


  if() {
    setTimeout(loop, 500);
}
