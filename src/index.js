import cipher from './cipher.js';

console.log(cipher);

const codeButton = document.getElementById("codeButton");
const decodeButton = document.getElementById("decodeButton");
const userText1 = document.getElementById("userText1");
const userText2 = document.getElementById("userText2");
const shiftText = document.getElementById("shift");
const about = document.getElementById("about");
const instructions = document.getElementById("instructions");
const caesarCipher = document.getElementById("caesarCipher");

codeButton.addEventListener("click", clickCode);
decodeButton.addEventListener("click", clickDecode);
about.addEventListener("click", aboutLink);
instructions.addEventListener("click", backLink);


instructions.style.display = "none";

function clickCode() {
    const offset = parseInt(shiftText.value);
    const firstInputText = userText1.value;
    userText2.value = cipher.encode(offset, firstInputText);
}   

function clickDecode() {
    const offset = parseInt(shiftText.value);
    const secondInputText = userText2.value;
    userText1.value = cipher.decode(offset, secondInputText);
}

function aboutLink() {
    caesarCipher.style.display = "none";
    instructions.style.display = "block";
}

function backLink() {
    instructions.style.display = "none";
    caesarCipher.style.display = "block";
}



