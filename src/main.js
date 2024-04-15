function invalidForm(event) {
    event.preventDefault()
    const message = document.querySelector('.invalid-message');
    const input = document.querySelector('.email');
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    console.log(emailRegex.test(input.value))
    if(!emailRegex.test(input.value)) {
        message.classList.remove('d-none');
        input.classList.add('invalid')
    }
    else {
        const card = document.querySelector('.card')
        card.classList.add('d-none')
        const cardSuccess = document.querySelector('.card-success');
        cardSuccess.classList.remove('d-none');
        document.querySelector('.user-email').innerText = input.value
    }
}