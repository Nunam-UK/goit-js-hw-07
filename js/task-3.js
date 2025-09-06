// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInput);
function onInput(event) {
  if (inputEl.value !== '') {
    outputEl.textContent = inputEl.value.trim();
    console.log(outputEl.textContent);
  }
  outputEl.textContent = 'Anonymous';
}
// Напиши скрипт для створення галереї зображень на основі масиву даних. HTML містить список ul.gallery.

// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.

// Ти можеш створити й додати HTML-елементи, використовуючи document.createElement() і elem.append() або шаблонні рядки і elem.insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами через CSS класи.

// const galleryEl = document.querySelector('.gallery');

// const newEl = document.createElement('li');
// galleryEl.append(newEl);

// const newImg = document.createElement('img');
// console.dir(newImg);

// newImg.src = images[0].url;
// newImg.alt = images[0].alt;

// console.dir(newImg);
// newEl.append(newImg);

// images.forEach(Object => {
//   console.log(Object.url);
//   console.log(Object.alt);
//   document.createElement()
// });
