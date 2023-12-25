import { db } from './script2.js';
console.log(db);
//  HW#1
// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));
// ______________________________________________________________
// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
// class counter {
//   constructor(initialCounterValue){
//     this.value = initialCounterValue
//   }
//   increment(){
//     this.value=this.value+1
//   };
//   decrement(){
//     this.value=this.value-1
//   };
//   showValue(){
//     console.log(this.value)
//   }
// }
function createCounter(initialCounterValue) {
  if (Number.isNaN(Number.isFinite(initialCounterValue))) {
    return console.log('Not a number');
  }
  const counter = {
    value: initialCounterValue,

    increment: function () {
      this.value = this.value + 1;
    },
    decrement: function () {
      this.value = this.value - 1;
    },
    show: function () {
      console.log(this.value);
    },
  };
  return counter;
}
const counter1 = createCounter(1);
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.show();
// ______________________________________________________________
// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
//___________
//создаю дерево
for (let i = 0; i < 10; i++) {
  const newSpan = document.createElement('div');
  newSpan.setAttribute('class', 'div#' + i);
  newSpan.textContent = 'Это див номер ' + i;

  document.body.appendChild(newSpan);
}
document.querySelectorAll('div').forEach((div, index) => {
  const newSpan = document.createElement('div');
  newSpan.setAttribute('class', 'div#' + index);
  newSpan.textContent = 'Это див номер ' + index;
  newSpan.style.marginLeft = '20px';

  div.appendChild(newSpan);
});
document.querySelectorAll('div').forEach((div, index) => {
  const newSpan = document.createElement('div');
  newSpan.setAttribute('class', 'div#' + index);
  newSpan.textContent = 'Это див номер ' + index;
  newSpan.style.marginLeft = '20px';

  div.appendChild(newSpan);
});

//Сама фунция
function findElementByClass(root, classToFind) {
  searchStatus = null;
  if (root.classList !== undefined) {
    if (root.classList.contains(classToFind)) {
      searchStatus = root;
    }
  }

  if (searchStatus === null) {
    const childs = root.childNodes;
    if (childs.length !== 0 && searchStatus === null) {
      searchStatus = findElementByClass(childs[0], classToFind);
    }
    if (root.nextSibling !== null && searchStatus === null) {
      searchStatus = findElementByClass(root.nextSibling, classToFind);
    }
  }

  return searchStatus;
}
document.addEventListener('input', (e) => inputHandler(e));
function inputHandler(e) {
  document.querySelectorAll('div').forEach((div) => (div.style.color = '#000'));
  const root = document.querySelector('div');
  const finded = findElementByClass(root, 'div#' + e.target.value);
  finded.style.color = 'red';
}
