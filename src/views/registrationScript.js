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
    validPassword = true;
    message = "";

    if (passwordOne == passwordTwo) {
        if (passwordOne.length < 6) {
            message = "Password must contain at least six characters!";
            validPassword = false;
        } else if (!numberCheck.test(passwordOne)) {
            message = "Password must contain at least one number (0-9)!";
            validPassword = false;
        } else if (!lowercaseCheck.test(passwordOne)) {
            message = "Password must contain at least one lowercase letter (a-z)!";
            validPassword = false;
        } else if (!uppercaseCheck.test(passwordOne)) {
            message = "Password must contain at least one uppercase letter (A-Z)!";
            validPassword = false;
        }
    } else {
        message = "Passwords entered must be the same!";
        validPassword = false;
    }

    return JSON.stringify({
        "validPassword": validPassword,
        "message": message
    });
}

const invalidInput = {
    show: function(message = "") {
        var errorBox = document.getElementById("invalidInputError")
        errorBox.style.display = "block";
        errorBox.innerHTML = message;
    },
    hide: function() {
        document.getElementById("invalidInputError").style.display = "none";
    }
}

function validateForm() {
    const passwordBox = document.getElementById("password");
    const validatePasswordBox = document.getElementById("passwordValidate");
    const emailBox = document.getElementById("email");

    if (!passwordBox.value || !validatePasswordBox.value || !emailBox.value) {
        return invalidInput.show("You need to fill in all the fields!");
    }

    const result = JSON.parse(checkPassword(passwordBox.value, validatePasswordBox.value));
    if (!result.validPassword) {
        return invalidInput.show(result.message);
    }

    const payload = JSON.stringify({
        "email": emailBox.value,
        "password": passwordBox.value,
        "confirmation": validatePasswordBox.value
    });

    postToServer(PAL_URL, payload).then(serverResponse => {
        console.log(serverResponse);
    })

    invalidInput.hide();
}