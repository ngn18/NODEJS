const email = document.registration.email;
const ward = document.registration.ward;
const firstName = document.registration.firstname;
const lastName = document.registration.lastname;
const dateOfBirth = document.registration.dateofbirth;
const nin = document.registration.nin;
const phoneNumber = document.registration.telephone;
const farmingActivity = document.registration.activity;
const registrationDate = document.registration.regdate;
const password = document.registration.password1;
const passwordAgain = document.registration.password2;


const checkEmail = () => {
    let validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(email.value === ''){
        email.style.border = '4px solid red'
        email.focus();
    }

    if(email.value.match(validateEmail)){
        email.style.border = '4px solid green';
        ward.focus();
    } else {
        email.style.border = '4px solid red';
        email.focus();
    }
};

const checkWard = () => {
    let validateWard =  /^[0-9a-zA-Z]+$/;

    if(ward.value === ''){
        ward.style.border = '4px solid red'
        ward.focus();
    }

    if(ward.value.match(validateWard)){
        ward.style.border = '4px solid green';
        firstName.focus();
    } else {
        ward.style.border = '4px solid red';
        ward.focus();
    }
};

const checkFirstName = () => {
    let validateFirstName =  /^[0-9a-zA-Z]+$/;

    if(firstName.value === ''){
        firstName.style.border = '4px solid red'
        firstName.focus();
    }

    if(firstName.value.match(validateFirstName)){
        firstName.style.border = '4px solid green';
        lastName.focus();
    } else {
        firstName.style.border = '4px solid red';
        firstName.focus();
    }
};

const checkLastName = () => {
    let validateLastName =  /^[0-9a-zA-Z]+$/;

    if(lastName.value === ''){
        lastName.style.border = '4px solid red'
        lastName.focus();
    }

    if(lastName.value.match(validateLastName)){
        lastName.style.border = '4px solid green';
        dateOfBirth.focus();
    } else {
        lastName.style.border = '4px solid red';
        lastName.focus();
    }
};

const checkDateOfBirth = () => {
    let validateDateOfBirth =  /^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/g;

    if(dateOfBirth.value === ''){
        dateOfBirth.style.border = '4px solid red'
        dateOfBirth.focus();
    }

    if(dateOfBirth.value.match(validateDateOfBirth)){
        dateOfBirth.style.border = '4px solid green';
        nin.focus();
    } else {
        dateOfBirth.style.border = '4px solid red';
        dateOfBirth.focus();
    }
};

const checkNin = () => {
    let validateNin =  /^[0-9]+$/;

    if(nin.value === ''){
        nin.style.border = '4px solid red'
        nin.focus();
    }

    if(nin.value.match(validateNin)){
        nin.style.border = '4px solid green';
        phoneNumber.focus();
    } else {
        nin.style.border = '4px solid red';
        nin.focus();
    }
};

const checkPhoneNumber = () => {
    let validatePhoneNumber = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;

    if(phoneNumber.value === ''){
        phoneNumber.style.border = '4px solid red'
        phoneNumber.focus();
    }

    if(phoneNumber.value.match(validatePhoneNumber)){
        phoneNumber.style.border = '4px solid green';
        farmingActivity.focus();
    } else {
        phoneNumber.style.border = '4px solid red';
        phoneNumber.focus();
    }
};

const checkFarmingActivity = () => {
    let validateFarmingActivity = /^[A-Za-z]+$/;

    if(farmingActivity.value === ''){
        farmingActivity.style.border = '4px solid red'
        farmingActivity.focus();
    }

    if(farmingActivity.value.match(validateFarmingActivity)){
        farmingActivity.style.border = '4px solid green';
        registrationDate.focus();
    } else {
        farmingActivity.style.border = '4px solid red';
        farmingActivity.focus();
    }
};

const checkRegDate = () => {
    let validateRegDate = /^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/g;

    if(registrationDate.value === ''){
        registrationDate.style.border = '4px solid red'
        registrationDate.focus();
    }

    if(registrationDate.value.match(validateRegDate)){
        registrationDate.style.border = '4px solid green';
        password.focus();
    } else {
        registrationDate.style.border = '4px solid red';
        registrationDate.focus();
    }
};

const checkPassword = () => {
    let pass_wrd = password.value;
    let confirm_pwd = passwordAgain.value;

    if(pass_wrd == '' || confirm_pwd == ''){
        alert('Password cannot be empty');
        password.style.border = '4px solid red';
        passwordAgain.style.border = '4px solid red';
        return false;
    }

    if(pass_wrd != confirm_pwd){
        alert('Passwords do not match');
        password.style.border = '4px solid red';
        passwordAgain.style.border = '4px solid red';
        return false;
    }
};