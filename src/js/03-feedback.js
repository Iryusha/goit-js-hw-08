import throttle from 'lodash.throttle';
const formItem = document.querySelector('.feedback-form');
const textareaItem = document.querySelector('.feedback-form textarea');
const inputItem = document.querySelector('.feedback-form input');

const STORAGE_KEY = 'feedback-form-state';

let FormData = {};

formItem.addEventListener('submit', FormSubmit);
formItem.addEventListener('input', throttle(onTextInput, 500));

saveInputText();

function FormSubmit(e) {
  e.preventDefault();
  if (inputItem.value && textareaItem.value) {
    console.log({
      email: inputItem.value,
      message: textareaItem.value,
    });
    e.currentTarget.reset();
    // localStorage.removeItem(STORAGE_KEY);
  }
}

function onTextInput(e) {
  FormData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(FormData));
  
}

function saveInputText() {
  const saveText = localStorage.getItem(STORAGE_KEY);
  console.log(saveText);
  if (saveText) {
    FormData = JSON.parse(saveText);
    inputItem.value = FormData.email || '';
    textareaItem.value = FormData.message || '';
  }
}