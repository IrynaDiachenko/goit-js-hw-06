function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let numbersOfEl = 0;
let boxesString = '';

const btnCreate = document.querySelector('data-create');
const btnDestroy = document.querySelector('data-destroy');
const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');

btnCreate.addEventListener('click', onBtnCreateClick);
inputEl.addEventListener('input', onInputChange);
btnDestroy.addEventListener('click', onBtnDestroyClick);

function onInputChange(event) {
  numbersOfEl = event.currentTarget.value;
}

function onInputChange(event) {
  numbersOfEl = event.currentTarget.value;
}

function onBtnCreateClick() {
  let boxSize = 30;
  let divElArray = [];

  for (let i = 1; i <= numbersOfEl; i++) {
    boxSize += 10;
    const color = getRandomHex();
    const element = document.createElement('div');
    element.style.backgroundColor = color;
    element.style.size = `${size}px`;
    divElArray.push(element);
  }

  boxesEl.append(...divElArray);
}

function onBtnCreateClick() {
  boxesEl.innerHTML = '';
  valueInputEl.removeAttribute('counter');
  valueInputEl.value = '';
}

valueInputEl.addEventListener('input', onCreaterInValueInput);
btnCreate.addEventListener('click', onBtnCreateBoxes);
btnDestroy.addEventListener('click', onBtnDestroy);
