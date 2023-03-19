const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let timerId = null;

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);
stopBtn.disabled = true;

function onStartBtn() {
    changeBgColor();
  timerId = setInterval(() => {
      changeBgColor()
    }, 1000);
    switchBtnDisabled()  
}

function onStopBtn() {
        clearInterval(timerId);
        switchBtnDisabled()
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBgColor() {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
}

function switchBtnDisabled() {
  if (!startBtn.disabled) {
    startBtn.disabled = true;
    stopBtn.disabled = false
  } else {
    startBtn.disabled = false;
    stopBtn.disabled = true
  }
}