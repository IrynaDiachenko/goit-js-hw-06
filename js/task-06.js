const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputElBlur);

function onInputElBlur(event) {
  inputEl.classList.add('invalid');
  if (
    event.currentTarget.value.length !== Number(inputElement.dataset.length)
  ) {
    inputEl.classList.replace('invalid', 'valid');
  }
}
