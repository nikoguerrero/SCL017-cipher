import cipher from './cipher.js';

console.log(cipher);

let codeButton = document.getElementById("codeButton");
let decodeButton = document.getElementById("decodeButton");
let userText1 = document.getElementById("userText1");
let userText2 = document.getElementById("userText2");


codeButton.addEventListener("click", clickCode);
decodeButton.addEventListener("click", clickDecode);


function clickCode() {
    let firstInputText = userText1.value;

    // charCode -> UNICODE (ASCII hasta 128)
    let charCodeArray = [];
    
    for(let i = 0; i < firstInputText.length; i++){
        let character = firstInputText.charCodeAt(i);
        let offset = 30;
        let code = (character - 65 + offset) % 26 + 65;
        charCodeArray += String.fromCharCode(code);
    }
    console.log(charCodeArray);
    userText2.value = charCodeArray;
}

function clickDecode() {
    let secondInputText = userText2.value;
    userText1.value = secondInputText;
}




