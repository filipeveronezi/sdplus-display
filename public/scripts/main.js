// DOM
import { chkOnOff, pButton, upButton, downButton, enterButton } from "./dom.js";

// functionalities
import { onOff } from "./on-off.js";
import { navigate, config } from "./menu.js";

// ON/OFF event
chkOnOff.onclick = onOff;

// display buttons events
pButton.addEventListener('click', navigate);
upButton.addEventListener('click', navigate);
downButton.addEventListener('click', navigate);
enterButton.addEventListener('click', navigate);

// pButton.addEventListener('mousedown', config);