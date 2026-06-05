// alert('Welcome to the registration form! Please fill in the details below.');
document.addEventListener('DOMContentLoaded', () => {
    const form =
        document.getElementById('register-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;
        const errorElements =
            document.querySelectorAll('.form-group');
        const nameInput =
            form.elements['name'];
        const emailInput =
            form.elements['email'];
        const passwordInput =
            form.elements['password'];
        const birthdateInput =
            form.elements['birthdate'];
        const phoneInput =
            form.elements['phone'];
        const agreeInput =
            form.elements['agree'];
        const checkedSkills =
            document.querySelectorAll(
                'input[name="skills"]:checked'
            );
        errorElements.forEach(element => {
            element.classList.remove('error');
        });
        if (
            nameInput.value.trim() === '' ||
            nameInput.value.length < 2 ||
            !/^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(nameInput.value)
        ) {
            isValid = false;
            nameInput
                .closest('.form-group')
                .classList.add('error');
        }
        if (
            emailInput.value.trim() === '' ||
            !/^\S+@\S+\.\S+$/.test(emailInput.value)
        ) {
            isValid = false;
            emailInput
                .closest('.form-group')
                .classList.add('error');
        }
        if (
            passwordInput.value.trim() === '' ||
            passwordInput.value.length < 5 ||
            !/\d/.test(passwordInput.value)
        ) {
            isValid = false;
            passwordInput
                .closest('.form-group')
                .classList.add('error');
        }
        if (birthdateInput.value === '') {
            isValid = false;
            birthdateInput
                .closest('.form-group')
                .classList.add('error');
        }
        if (checkedSkills.length === 0) {
            isValid = false;
            document.querySelector('.skills')
                .classList.add('error');
        }
        if (
            phoneInput.value.trim() === '' ||
            !/^\+380\d{9}$/.test(phoneInput.value)
        ) {
            isValid = false;
            phoneInput
                .closest('.form-group')
                .classList.add('error');
        }
        if (!agreeInput.checked) {
            isValid = false;
            agreeInput
                .closest('.form-group')
                .classList.add('error');
        }
        if (isValid) {
            alert('Registration successful!');
            form.reset();
        } else {
            alert(
                'Please correct the highlighted fields.'
            );
        }
    });
});