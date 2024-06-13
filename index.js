const subscribeForm = document.querySelector('form');
const emailInput = document.querySelector('input[name="email"]');
const subscribeButton = document.querySelector('#subscribe-button');
const dialog = document.querySelector('dialog');
const emailConfirmation = document.querySelector('.confirmation__email');
const dismissButton = document.querySelector('.dismiss');

dismissButton.addEventListener('click', () => {
    emailInput.value = '';
    dialog.close();
})

subscribeButton.addEventListener('click', () => {
    subscribeForm.classList.remove('invalid');
    const email = emailInput.value;
    if (email && emailInput.checkValidity()) {
        emailConfirmation.textContent = email;
        dialog.showModal();
    } else {
        emailInput.focus();
        subscribeForm.classList.add('invalid');
    }
})
