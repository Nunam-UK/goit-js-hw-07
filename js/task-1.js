// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const list = document.querySelector('#categories');
const arryOfRefsLiItem = document.querySelectorAll('.item');

console.log('Number of categories:', arryOfRefsLiItem.length);

const titleEl = document.querySelectorAll('h2');
const ulEl = document.querySelectorAll('ul');

const title = titleEl.forEach(h2 => {
  console.log('Category: ' + h2.textContent);
  console.dir('Elements: ' + h2.nextElementSibling.children.length);
});

// const h2 = {
//   textContent: 'Animal',
//   nextElementSibling: {
//     children: [1, 2, 3],
//   },
// };

// console.log(h2.textContent);
// console.log(h2.nextElementSibling.children[0]);
