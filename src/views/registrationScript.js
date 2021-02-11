const PAL_URL = "http://localhost:8080/user/register"
const numberCheck = /[0-9]/;
const lowercaseCheck = /[a-z]/;
const uppercaseCheck = /[A-Z]/;

async function postToServer(url = "", payload = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: payload
    });
    return response;
}

function checkPassword(passwordOne = "", passwordTwo = "") {
    let validPassword = true;
    let message = "";

    if (passwordOne == passwordTwo) {
        if (passwordOne.length < 6) {
            message = "Password must contain at least six characters!";
            validPassword = false;
            document.getElementById("card").style.height = "465px";
        } else if (!numberCheck.test(passwordOne)) {
            message = "Password must contain at least one number (0-9)!";
            validPassword = false;
            document.getElementById("card").style.height = "465px";
        } else if (!lowercaseCheck.test(passwordOne)) {
            message = "Password must contain at least one lowercase letter (a-z)!";
            validPassword = false;
            document.getElementById("card").style.height = "465px";
        } else if (!uppercaseCheck.test(passwordOne)) {
            message = "Password must contain at least one uppercase letter (A-Z)!";
            validPassword = false;
            document.getElementById("card").style.height = "465px";
        }
    } else {
        message = "Passwords entered must be the same!";
        validPassword = false;
        document.getElementById("card").style.height = "450px";
    }

    return JSON.stringify({
        "validPassword": validPassword,
        "message": message
    });
}

function checkUsername(username = "") {
    let validUsername = true;
    let message = "";

    if (username.length < 3) {
        message = "Username must contain at least three characters!";
        validUsername = false;
        document.getElementById("card").style.height = "465px";
    } else if (username.length > 32) {
        message = "Username must contain less than thirty-two characters!";
        validUsername = false;
        document.getElementById("card").style.height = "465px";
    }

    return JSON.stringify({
        "validPassword": validUsername,
        "message": message
    });
}

//Doesnt work - The check for if the email 
//is valid doesnt work, this is the function
function checkEmail(email = "") {
    let validEmail = true;
    let message = "";
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailReg.test(String(email).toLowerCase())) {
        message = "Please provide a vailid email!";
        validEmail = false;
        document.getElementById("card").style.height = "465px";
    }

    return JSON.stringify({
        "validPassword": validEmail,
        "message": message
    });
}

const invalidInput = {
    show: function(message = "") {
        const errorBox = document.getElementById("invalidInputError");
        errorBox.style.display = "block";
        errorBox.innerHTML = message;
    },
    hide: function() {
        document.getElementById("invalidInputError").style.display = "none";
        //Doesn't work - The registratoin card doesn't 
        //get resized to 415px when "input.hide();" is ran
        //other resizing functions work tho
        document.getElementById("card").style.height = "415px";
    }
}

function validateForm() {
    const emailBox = document.getElementById("email");
    const usernameBox = document.getElementById("username");
    const passwordBox = document.getElementById("password");
    const validatePasswordBox = document.getElementById("passwordValidate");

    if (!passwordBox.value || !validatePasswordBox.value || !emailBox.value || !usernameBox.value) {
        invalidInput.show("You need to fill in all the fields!");
        document.getElementById("card").style.height = "450px";
        return;
    }

    const passwordResult = JSON.parse(checkPassword(passwordBox.value, validatePasswordBox.value));
    if (!passwordResult.validPassword) {
        return invalidInput.show(passwordResult.message);
    }

    const usernameResult = JSON.parse(checkUsername(usernameBox.value));
    if (!usernameResult.validUsername) {
        return invalidInput.show(usernameResult.message);
    }

    //Doesnt work - The check for if the email 
    //is valid doesnt work, this is the where the 
    //function is called
    const emailResult = JSON.parse(checkEmail(emailBox.value));
    if (!emailResult.validEmail) {
        return invalidInput.show(emailResult.message);
    }

    const payload = JSON.stringify({
        "email": emailBox.value,
        "username": usernameBox.value,
        "password": passwordBox.value,
        "confirmation": validatePasswordBox.value
    });

    postToServer(PAL_URL, payload).then(serverResponse => {
        console.log(serverResponse);
    })

    invalidInput.hide();
}