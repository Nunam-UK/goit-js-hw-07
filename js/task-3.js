// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// const inputEl = document.querySelector('#name-input');
// const outputEl = document.querySelector('#name-output');

// inputEl.addEventListener('input', onInput);
// function onInput(event) {
//   if (inputEl.value !== '') {
//     outputEl.textContent = inputEl.value.trim();
//     console.log(outputEl.textContent);
//   }
//   outputEl.textContent = 'Anonymous';
// }
const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInput);

function onInput(event) {
  const trimmedValue = event.currentTarget.value.trim();
  outputEl.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
}
