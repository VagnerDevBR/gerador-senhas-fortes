// Seleciona elementos do HTML
const lengthInput = document.getElementById('length');
const uppercaseInput = document.getElementById('uppercase');
const lowercaseInput = document.getElementById('lowercase');
const numbersInput = document.getElementById('numbers');
const symbolsInput = document.getElementById('symbols');
const passwordField = document.getElementById('password');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');

// Caracteres para cada tipo
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

// Função que gera senha
function generatePassword() {
    let length = parseInt(lengthInput.value);
    let chars = "";

    if (uppercaseInput.checked) chars += uppercaseChars;
    if (lowercaseInput.checked) chars += lowercaseChars;
    if (numbersInput.checked) chars += numberChars;
    if (symbolsInput.checked) chars += symbolChars;

    if (chars === "") {
        alert("Selecione pelo menos uma opção!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    passwordField.value = password;
}

// Função para copiar senha
function copyPassword() {
    if (passwordField.value === "") {
        alert("Nenhuma senha para copiar!");
        return;
    }
    navigator.clipboard.writeText(passwordField.value);
    alert("Senha copiada para a área de transferência!");
}

// Eventos
generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);
