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

export {
  sleep,
  addAnimationDelay,
  removeAnimationDelay,
  addLedOn,
  addLedOff,
  addLedBlink,
  removeLedOn,
  removeLedOff,
  removeLedBlink,
  addBlink,
  removeBlink,
};
