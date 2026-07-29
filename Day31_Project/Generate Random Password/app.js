const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {

    let password = "";

    // Ensure at least one character from each category
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // Fill remaining characters
    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle password
    password = password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");

    passwordBox.value = password;
}

async function copyPassword() {

    if (!passwordBox.value) {
        alert("Generate a password first!");
        return;
    }

    try {
        await navigator.clipboard.writeText(passwordBox.value);

        const copyIcon = document.querySelector(".display img");

        copyIcon.style.transform = "scale(1.2)";

        setTimeout(() => {
            copyIcon.style.transform = "scale(1)";
        }, 200);

    } catch (error) {
        alert("Unable to copy password.");
    }

}