import cipher from './cipher.js';

console.log(cipher);

let codeButton = document.getElementById("codeButton");
let decodeButton = document.getElementById("decodeButton");
let userText1 = document.getElementById("userText1");
let userText2 = document.getElementById("userText2");
let shiftText = document.getElementById("shift");

codeButton.addEventListener("click", clickCode);
decodeButton.addEventListener("click", clickDecode);

function clickCode() {
    let offset = parseInt(shiftText.value);
    let firstInputText = userText1.value;
    userText2.value = cipher.encode(offset, firstInputText);
}   

function clickDecode() {
    let offset = parseInt(shiftText.value);
    let secondInputText = userText2.value;
    userText1.value = cipher.decode(offset, secondInputText);
}




