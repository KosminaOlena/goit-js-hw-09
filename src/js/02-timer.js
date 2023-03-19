import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {

    inputDate: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'), 
};

let SELECTED_DATE = new Date();
let delta;
refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < Date.now()) {
            Notiflix.Notify.failure('Please choose a date in the future');
        } else {
            refs.startBtn.disabled = false;
            this.defaultDate = selectedDates[0];
            SELECTED_DATE = selectedDates[0];
      }
  },
};

refs.startBtn.addEventListener('click', onStartTimer);

function onStartTimer() {
    refs.startBtn.disabled = true;
    const timerId = setInterval(() => {
        delta = SELECTED_DATE - Date.now();
        const timerContent = convertMs(delta);
        if (delta <= 0) {
            clearInterval(timerId);
        } else {
            refs.days.textContent = addLeadingZero(timerContent.days);
            refs.hours.textContent = addLeadingZero(timerContent.hours);
            refs.minutes.textContent = addLeadingZero(timerContent.minutes);
            refs.seconds.textContent = addLeadingZero(timerContent.seconds);
        }
     }, 1000)
  
}
flatpickr(refs.inputDate, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}