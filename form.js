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
        showError(passwordInput, 'Password must contain every character!!');
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
function validateEmail(email){
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email)
}
function validatePassword(password){
    const re = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
}
passwordInput.addEventListener('input', function(){
    const strength = getePasswordStrength(passwordInput.value);
    updateStrengthBar(strength);
})
 function getePasswordStrength(password){
    let strength = 0;
    if(password.length > 0) strength++;
    if(/[A-Z]/.test(password)) strength++;
    if(/\d/.test(password)) strength++;
    if(/[@$!%*?&]/.test(password)) strength++;
    return (strength / 4) * 100;
 }
function updateStrengthBar(strength) {
    strengthBar.style.width = strength + '%';
    strengthBar.style.background = strength < 50 ? 'red' : strength < 75 ? 'orange' : 'green';
}