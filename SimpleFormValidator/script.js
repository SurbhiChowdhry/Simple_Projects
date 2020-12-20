const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

function showErrorMessage(input, message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small= formControl.querySelector('small');
    small.innerText = message;
}

function showSuccessMessage(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email.value.trim())){
        showSuccessMessage(email);
    } else {
        showErrorMessage(email, 'Email is not valid')
    }
}

function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        showErrorMessage(input2, 'Passwords do not match')
    }
}

function checkIfRequired(inputArray){
    inputArray.forEach(function(input){
        if(input.value.trim() === ''){
            showErrorMessage(input, `${getFieldName(input)} is required`);
        }else {
            showSuccessMessage(input);
        }
    })
}

function checkLength(input, min, max){
    if(input.value.length < min){
        showErrorMessage(input, `${getFieldName(input)} must be at least ${min} characters`)
    } else if(input.value.length > max){
        showErrorMessage(input, `${getFieldName(input)} must not be more than ${max} characters`)
    } else {
        showSuccessMessage(input);
    }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    checkIfRequired([username, email, password, confirmPassword]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 20);
    validateEmail(email);
    checkPasswordsMatch(password, confirmPassword);
})