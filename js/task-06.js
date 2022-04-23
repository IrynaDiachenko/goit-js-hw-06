const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputElBlur);

function onInputElBlur(event) {
  inputEl.classList.add('invalid');
  if (
    event.currentTarget.value.length * 1 ===
    inputEl.CDATA_SECTION_NODE.length * 1
  ) {
    inputEl.classList.replace('invalid', 'valid');
  }
}
