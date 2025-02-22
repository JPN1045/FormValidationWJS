const form =  document.getElementById('registration');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');   
const phoneInput = document.getElementById('phone');     
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const strengthBar = document.getElementById('strengthBar');

form.addEventListener('submit', function(e){
    e.preventDefault();
    validateForm();
});
function validateForm(){
    clearErrors();
    let isValid = true;

    if(nameInput.value.trim().length < 3){
        showError(nameInput, 'Name must be atleast 3 characters long!!');
        isValid = false;
    }
    if(!validateEmail(emailInput.value.trim())){
        showError(emailInput, 'Email is not valid!!');
        isvalid = false;
    }
    if (!/^\d{10}$/.test(phoneInput.value.trim())) {
        showError(phoneInput, 'Phone number must be atleast 10 characters long!!');
        isValid = false;
    }
    if(!validatePassword(passwordInput.value.trim())){
        showError(passwordInput, 'Password must contain a capital letter, a small letter, a number and a special character!!');
        isValid = false;
    }
    if(confirmPasswordInput.value.trim() !== passwordInput.value.trim()){
        showError(confirmPasswordInput, 'Password does not match!!');
        isValid = false;
    }
    if(isValid){
        alert('Form Submitted Successfully!!');
        form.reset();
        updateStrengthBar(0);
    }
}
function showError(input, message){
    const error = input.nextElementSibling;
    error.textContent = message;
    error.style.display = 'block';
}
function clearErrors(){
    document.querySelectorAll('.error').forEach(error => {
        error.style.display = 'none';
        error.textContent = '';
    });
}