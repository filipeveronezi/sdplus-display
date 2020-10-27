import { displayText1, displayText2, pButton } from "./dom.js";
import { sleep } from './actions.js';

function navigate(e) {
  let id = e.target.id;

  if (id == "p-button") {
    console.log("P");
  }

  if (id == "up-button") {
    console.log("Up");
  }

  if (id == "down-button") {
    console.log("Down");
    // displayText1.textContent = "Config. Rede"
    // displayText2.textContent = "- - - - >"
  }

  if (id == "enter-button") {
    console.log("Enter");
  }
}

async function config(e) {
  
}

export { navigate, config };
