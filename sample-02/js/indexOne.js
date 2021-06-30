var subscribtion = '';
var responseData = '';

//Error message
var borderRed = '1px solid red';
var emailFieldMsg = "Email field cannot be empty !!!";
var emailMatchMsg = "Please enter the correct email address";

// Email Field Validation 
function validateEmail() {

    var emailField = document.getElementById("userEmail");
    var errorMsg = document.getElementById("emailError");
    var reg = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;,.](([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+)*$/;
    if (typeof emailField.value == 'undefined' || emailField.value == null || emailField.value === '') {
        errorMsg.innerHTML = emailFieldMsg;
        errorMsg.style.display = "block";
        emailField.style.border = borderRed;
        return false;
    } else if (!emailField.value.match(reg)) {
        errorMsg.innerHTML = emailMatchMsg;
        errorMsg.style.display = "block";
        emailField.style.border = borderRed;
        return false;
    }
    errorMsg.innerHTML = '';
    errorMsg.style.display = "none";
    emailField.style.border = '';
    return true;

}

// Radio Field Validation
function radioValid() {
    var subcribe = document.getElementsByName("optradio");
    var arrayRadio = document.getElementsByClassName('checkmark');
    var radioErrorMsgId = document.getElementById('radioErroMsg');
    var radioErrorMsg = 'Please select either Yes or No';

    console.log(arrayRadio);
    if (subcribe[0].checked == true) {
        console.log("Your gender is male");
    } else if (subcribe[1].checked == true) {
        console.log("Your gender is female");
    } else {
        // no checked
        arrayRadio[0].style.border = borderRed;
        arrayRadio[1].style.border = borderRed;
        radioErrorMsgId.style.display = 'block';
        radioErrorMsgId.innerHTML = radioErrorMsg;
        return false;
    }
    arrayRadio[0].style.border = '';
    arrayRadio[1].style.border = '';
    radioErrorMsgId.style.display = 'none';
    radioErrorMsgId.innerHTML = '';
    return true;
}

//Form validation
function validateForm(event) {
    event.preventDefault();

    var formWraper = document.querySelector('.form-wrapper');

    if (!validateEmail() || !radioValid()) {
        console.log("form not submitted");
        return false;
    }

    var marketingEmail = document.querySelector('input[name="optradio"]:checked').value
    marketingEmail == 'yes' ? subscribtion = 'subscribed' : subscribtion = 'unsubscribed';
    responseData = `Thanks. You have now been ${subscribtion} from Bupa marketing by email.`;

    //Pass the data to another page
    localStorage.setItem("pageOneData", responseData);
    Redirect();

    return true;

}

//Redirect the page to indexTwo.html
function Redirect() {
    window.location = "indexTwo.html";
}

if (document.getElementById('mainForm')) {
    var mainForm = document.getElementById('mainForm');
    mainForm.addEventListener('submit', validateForm);
}