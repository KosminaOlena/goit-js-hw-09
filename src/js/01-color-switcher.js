const bodyEl = document.body;
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);
stopBtn.setAttribute("disabled", "true");

function onStartBtn() {
    bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
    timerId = setInterval(() => {
        bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
    }, 1000);
    startBtn.setAttribute("disabled", "true");
    stopBtn.removeAttribute("disabled");
    
}
function onStopBtn() {
    if (startBtn.hasAttribute("disabled")) {
        clearInterval(timerId);
        startBtn.removeAttribute("disabled");
        stopBtn.setAttribute("disabled", "true");
    }
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
