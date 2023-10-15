const submitButton = document.querySelector('#submit-button');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const errorMessage = document.querySelector('.msg');
const listItems = document.querySelector('.items');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === '' || emailValue === '') {
        errorMessage.textContent = 'Please, fill out all the fields!'
        errorMessage.style.color = 'red';
        return 1;
    } else {
        errorMessage.textContent = '';
    }

    listItems.style.display = 'block';

    listItems.firstElementChild.textContent = nameValue;
    listItems.lastElementChild.textContent = emailValue;
});