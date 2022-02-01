import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('.feedback-form textarea');
const inputEl = document.querySelector('.feedback-form input');

const STORAGE_KEY = 'feedback-form-state';

const feedbackFormData = {};

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onTextInput, 500));

populateInputText();

function onFormSubmit(e) {
  e.preventDefault();

  if (inputEl.value && textareaEl.value) {
    console.log({
      email: inputEl.value,
      message: textareaEl.value,
    });

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
}

function onTextInput(e) {
  feedbackFormData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormData));
}

function populateInputText() {
  const saveText = localStorage.getItem(STORAGE_KEY);

  if (saveText) {
    inputEl.value = JSON.parse(saveText).email || '';
    textareaEl.value = JSON.parse(saveText).message || '';
  }
}

