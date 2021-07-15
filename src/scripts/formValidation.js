export default function formValidation() {
    const ifFormRegister = document.querySelector('.register_form');
    const form = document.querySelector('.loginForm');
    const firstName = document.querySelector('.firstName');
    const lastName = document.querySelector('.lastName')
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');
    const password2 = document.querySelector('.password2');
    const btn = document.querySelector('.btn');

    // Show input error message
    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.className = 'input-field error';
        const small = formControl.querySelector('small');
        small.innerText = message;
    }

// Show success outline
    function showSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = 'input-field success';
    }

// Check email is valid
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Check passwords match
    function checkPasswordsMatch(input1, input2) {
        if (input1.value !== input2.value) {
            showError(input2, 'Passwords do not match');
        }
    }

    if (form) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();

            if (email.value == '') {
                showError(email, 'Email is required');
            } else if (!isValidEmail(email.value)) {
                showError(email, 'Email is not valid');
            } else {
                showSuccess(email);
            }
            if (password.value == '') {
                showError(password, 'Password is required');
            } else {
                showSuccess(password);
            }
        });
    }

    if (ifFormRegister) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            if (firstName.value == '') {
                showError(firstName, 'First Name is required');
            } else {
                showSuccess(firstName);
            }
            if (lastName.value == '') {
                showError(lastName, 'Last Name is required');
            } else {
                showSuccess(lastName);
            }
            if (email.value == '') {
                showError(email, 'Email is required');
            } else if (!isValidEmail(email.value)) {
                showError(email, 'Email is not valid');
            } else {
                showSuccess(email)
            }
            if (password.value == '') {
                showError(password, 'Password is required');
            } else {
                showSuccess(password);
            }
            if (password2.value == '') {
                showError(password2, 'Confirm password is required');
            } else if(password.value === password2.value) {
                showError(password2, 'Password not matched');
            } else {
                showSuccess(password2);
            }
            checkPasswordsMatch(password, password2);
        });
    }
}