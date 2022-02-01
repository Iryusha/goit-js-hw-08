import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let items = {};

formRef.addEventListener('submit', formSubmit);
formRef.addEventListener('input', throttle(textAreaInput, 500));
populateForm();

function textAreaInput(event) {
  items[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function formSubmit(event) {
  event.preventDefault();
  if (formRef.email.value === '' || formRef.message.value === '') {
    alert('All fields are required!');
  } else {
    console.log(items);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    items = {};
  }
}

function populateForm() {
  const savedInfo = JSON.parse(localStorage.getItem(STORAGE_KEY))

  for (const key in savedInfo) {
    if (key) {
      formRef[key].value = savedInfo[key];
      items = savedInfo;
    }
  }
}



