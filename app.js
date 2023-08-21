const nameErrorMsg = document.getElementById('nameErrorMsg');
const emailErrorMsg = document.getElementById('emailErrorMsg');
const mobileErrorMsg = document.getElementById('mobileErrorMsg');
const lettersCount = document.getElementById('lettersCount');
const successMsg = document.getElementById('successMsg'); 

const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');
const inputMobileNo = document.getElementById('inputMobileNo');
const inputAddress = document.getElementById('inputAddress');

const namePattern = /^[a-zA-Z ]+$/;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const mobileNumberPattern = /^[0-9]{10}$/;

inputName.addEventListener('input', validateName);
inputEmail.addEventListener('input', validateEmail);
inputMobileNo.addEventListener('input', validateMobileNo);
inputAddress.addEventListener('input', checkAddressLettersCount);

document.getElementById('registrationForm')
.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!isNameValid || !isEmailValid || !isMobileValid) {
        return;
    }
    
    inputName.value = '';
    inputEmail.value = '';
    inputMobileNo.value = '';
    inputAddress.value = '';

    successMsg.style.display = 'block';
    setTimeout(() => {
        successMsg.style.display = 'none'
    }, 3000);
})

let isNameValid = false;
let isEmailValid = false;
let isMobileValid = false;

function validateName(event) {
    isNameValid = namePattern.test(event.target.value)
    if (isNameValid) {
        nameErrorMsg.style.display = 'none'
    } else {
        nameErrorMsg.style.display = 'inline'
    }
}

function validateEmail(event) {
    isEmailValid = emailPattern.test(event.target.value)
    if(isEmailValid){
        emailErrorMsg.style.display = 'none';
    } else {
        emailErrorMsg.style.display = 'inline';
    }
}

function validateMobileNo(event) {
    isMobileValid = mobileNumberPattern.test(event.target.value)
    if(isMobileValid){
        mobileErrorMsg.style.display = 'none';
    } else {
        mobileErrorMsg.style.display = 'inline';
    }
}

function checkAddressLettersCount(event) {
    const size = event.target.value.length;
    lettersCount.innerText = `${size} / 200`;
    
    if (size >= 200) {
        lettersCount.style.color = 'red'
    } else {
        lettersCount.style.color = 'black'
    }
}