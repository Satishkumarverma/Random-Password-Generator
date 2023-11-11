const inputBox = document.querySelector("#numbers");
const passwordBox = document.querySelector("#password_box");

let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let small = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let symbols = "!@#$%&+/";
total = capital + small + numbers + symbols;

function generatePassword() {
    let length = inputBox.value;
    passwordBox.value = "";
    let size = Number.parseInt(length);
    if (size > 0) {
        let password = "";
        for (i = 1; i <= size; i++) {
            let randomNumber = Math.floor(Math.random() * total.length);
            password += total.substring(randomNumber, randomNumber + 1);
        }
        passwordBox.value = password;
        let message = "Password is generated successfully!";
        let color = "green";
        let background = "lightgreen"
        show_alert(message, color, background)
    }
    else if (size <= 0) {
        let message = "Enter the password size more then zero!";
        show_alert(message)
    }
    else {
        let message = "Enter the password size!";
        show_alert(message)
    }
}

function copyPassword() {
    let length = inputBox.value;
    let size = Number.parseInt(length);
    if (size > 0) {
        let pass = passwordBox;
        pass.select();
        navigator.clipboard.writeText(pass.value);
        let message = "Password copyed successfully!";
        let color = "green";
        let background = "lightgreen"
        show_alert(message, color, background)
    }
    else {
        let message = "Generate your password!";
        show_alert(message)
    }
}

function show_alert(message, color = "red", background) {
    setTimeout(() => {
        document.getElementById("msg").innerHTML = message;
        document.getElementById("icon").style.color = color;
        let change = document.getElementById("color_change");
        change.style.color = color;
        change.style.borderColor = color;
        change.style.background = background;
    },)
    setTimeout(() => {
        document.getElementById("icon").style.color = "black";
        let change = document.getElementById("color_change");
        change.style.color = "black";
        change.style.borderColor = "black";
        change.style.background = "black";
    }, 900)
}

