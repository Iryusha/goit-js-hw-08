import throttle from 'lodash.throttle';
const formItem= document.querySelector('.feedback-form');
const textareaItem = document.querySelector('.feedback-form textarea');
const inputItem = document.querySelector('.feedback-form input');

const STORAGE_KEY = 'feedback-form-state';

formItem.addEventListener('submit', formSubmit);
textareaItem.addEventListener('input', throttle(onTextInput, 500));

const formData = {};

inputText();

function formSubmit(evt) {

      evt.preventDefault();

    if (inputItem.value && textareaItem.value) {
        console.log({
            email: inputItem.value,
            message: textareaItem.value
        })

        evt.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
    }

}

function onTextInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function inputText() {
  const saveText = localStorage.getItem(STORAGE_KEY);

  if (saveText) {
    inputItem.value = JSON.parse(saveText).email || '';
    textareaItem.value = JSON.parse(saveText).message || '';
  }
}

