import cipher from './cipher.js';

console.log(cipher);

const codeButton = document.getElementById("codeButton");
const decodeButton = document.getElementById("decodeButton");
const userText1 = document.getElementById("userText1");
const userText2 = document.getElementById("userText2");
const shiftText = document.getElementById("shift");

codeButton.addEventListener("click", clickCode);
decodeButton.addEventListener("click", clickDecode);

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




