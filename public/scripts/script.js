// const variables

// DOM elements
let chkOnOff = document.querySelector("#on-off");
let leds = document.querySelectorAll(".led");
let checkbox = document.querySelector(".switch");
let displayText1 = document.querySelector(".display-text-1");
let displayText2 = document.querySelector(".display-text-2");
let pButton = document.querySelector("#p-button");
let upButton = document.querySelector("#up-button");
let downButton = document.querySelector("#down-button");
let enterButton = document.querySelector("#enter-button");

// sleep function from https://medium.com/dev-genius/how-to-make-javascript-sleep-or-wait-d95d33c99909
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//animation functions
function addAnimationDelay(element, delay) {
  element.style.animationDelay = delay + "ms";
}

function removeAnimationDelay(element) {
  element.style.animationDelay = "0ms";
}

function addLedOn(element) {
  element.classList.add("animate-ledOn");
}

function addLedOff(element) {
  element.classList.add("animate-ledOff");
}

function addLedBlink(element) {
  element.classList.add("animate-ledBlink");
}

function removeLedOn(element) {
  element.classList.remove("animate-ledOn");
}

function removeLedOff(element) {
  element.classList.remove("animate-ledOff");
}

function removeLedBlink(element) {
  element.classList.remove("animate-ledBlink");
}

function addBlink(element) {
  element.classList.add("animate-blink");
}

function removeBlink(element) {
  element.classList.remove("animate-blink");
}

function addFadeIn(element) {
  element.classList.add("animate-fadeIn");
}

function removeFadeIn(element) {
  element.classList.remove("animate-fadeIn");
}

// ON/OFF animation
chkOnOff.onclick = async () => {
  // verify if checkbox is checked
  if (chkOnOff.checked) {
    // disable on/off button until animation is done
    chkOnOff.disabled = true;
    checkbox.disabled = true;
    checkbox.style.cursor = "not-allowed";

    //disable display buttons until animation is done
    pButton.disabled = true;
    pButton.style.cursor = "not-allowed";
    upButton.disabled = true;
    upButton.style.cursor = "not-allowed";
    downButton.disabled = true;
    downButton.style.cursor = "not-allowed";
    enterButton.disabled = true;
    enterButton.style.cursor = "not-allowed";

    // initialize delay variable
    let delay = 0;
    // add +500ms animation delay for each led + turn up one by one
    leds.forEach((element) => {
      delay += 600;
      addAnimationDelay(element, delay);
      removeLedOff(element);
      addLedOn(element);
    });

    // wait 7 seconds
    await sleep(7000);

    // remove the delays and start led blinking
    leds.forEach((element) => {
      removeAnimationDelay(element);
      addLedBlink(element);
    });

    // add blinking animation to display text
    addBlink(displayText1);
    addBlink(displayText2);

    // add text to display
    displayText1.textContent = "Treetech";
    displayText2.textContent = "Digital Systems";

    // wait 5 seconds
    await sleep(7000);

    // add wip text with 0002 error code
    displayText1.textContent = "Work in progress";
    displayText2.textContent = "0002";

    // turn off all the leds
    leds.forEach((element) => {
      removeLedBlink(element);
      removeLedOn(element);
      addLedOff(element);
    });

    //remove display text blinking effect
    removeBlink(displayText1);
    removeBlink(displayText2);

    // add blink to autodiagnostic
    addLedBlink(leds[0]);

    // enable on/off button
    chkOnOff.disabled = false;
    checkbox.disabled = false;
    checkbox.style.cursor = "pointer";

    //enable display buttons
    pButton.disabled = false;
    pButton.style.cursor = "pointer";
    upButton.disabled = false;
    upButton.style.cursor = "pointer";
    downButton.disabled = false;
    downButton.style.cursor = "pointer";
    enterButton.disabled = false;
    enterButton.style.cursor = "pointer";
  } else {
    // turn off all the leds
    leds.forEach((element) => {
      removeAnimationDelay(element);
      addLedOff(element);
      removeLedOn(element);

      // remove autodiagnostic blink
      removeLedBlink(leds[0]);

      // remove display text
      displayText1.textContent = "";
      displayText2.textContent = "";
    });
    return;
  }
};

function buttonPressed(event) {
  //console.log(event.target.id);
  id = event.target.id;

  if (id == "p-button") {
    console.log("P");
  }

  if (id == "up-button") {
    console.log("Up");
  }

  if (id == "down-button") {
    console.log("Down");
  }

  if (id == "enter-button") {
    console.log("Enter");
  }
}
