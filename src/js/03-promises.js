import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');


formEl.addEventListener('submit', onSubmitForm);


function onSubmitForm(event) {
  event.preventDefault();
  const refs = {
    delay: parseInt(formEl.delay.value),
    step: parseInt(formEl.step.value),
    amount: parseInt(formEl.amount.value)
  }
  for (let i = 1; i <= refs.amount; i += 1){
    createPromise(i, refs.delay)
      .then(({ position, delay }) => {
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`)
      })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`)
    })
    refs.delay += refs.step;
  }

}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
      resolve ({position, delay})
      } else {
        reject({position, delay})
    }
  },delay)
})  
}

