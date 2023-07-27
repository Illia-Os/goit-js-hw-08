import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let textForStorage = { message: '', email: '' };

const formInputEL = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};


formInputEL.form.addEventListener('submit', onForfSubmit);
formInputEL.textarea.addEventListener('input', throttle(onTextareaInput, 500));
formInputEL.input.addEventListener('input', throttle(onInputInput, 500));

saveStorageText();

function onForfSubmit(evt) {

  evt.preventDefault();

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  textForStorage = { message: '', email: '' };
}

function onTextareaInput(e) {
  if (localStorage.getItem(STORAGE_KEY)) {
    textForStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  }

  textForStorage.message = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(textForStorage));
}

function onInputInput(evt) {
  if (localStorage.getItem(STORAGE_KEY)) {
    textForStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  }
  textForStorage.email = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(textForStorage));
}


function saveStorageText() {
  if (localStorage.getItem(STORAGE_KEY)) {
    const savedMassege = JSON.parse(localStorage.getItem(STORAGE_KEY));
    formInputEL.textarea.value = savedMassege.message;
    formInputEL.input.value = savedMassege.email;
  }
}
