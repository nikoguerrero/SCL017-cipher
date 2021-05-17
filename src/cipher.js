const cipher = {
  encode: function(offset, string) {
    if(typeof offset !== "number") {
      throw new TypeError("error en valor de offset");
    }

    if(typeof string !== "string") {
      throw new TypeError("error en valor de string");
    }

    // charCode -> UNICODE (ASCII hasta 128)
    let inputText = "";
      
    for(let i = 0; i < string.length; i++){
        let character = string.charCodeAt(i);
        if(character >= 97 && character <= 122) {
          inputText += String.fromCharCode((character - 97 + offset)% 26 + 97);
        } else if(character >= 65 && character <= 90) {
          inputText += String.fromCharCode((character - 65 + offset)% 26 + 65);
        } else {
          inputText += String.fromCharCode(character);
        }
    }
    return inputText;
  },
  
  decode: function(offset, string) {
    if(typeof offset !== "number") {
      throw new TypeError("error en valor de offset");
    }

    if(typeof string !== "string") {
      throw new TypeError("error en valor de string");
    }

    let inputText = "";

    for(let i = 0; i < string.length; i++){
      let character = string.charCodeAt(i);
      console.log((character - 97 - offset) % 26 + 97);
      if(character >= 97 && character <= 122) {
        if(offset > 26) {
          inputText += String.fromCharCode((character + 97 + offset) % 26 + 97);
          } else {
            inputText += String.fromCharCode((character - 97 - offset +26) % 26 + 97);
          }
      } else if(character >= 65 && character <= 90) {
        inputText += String.fromCharCode((character + 65 - offset) % 26 + 65);
      } else {
        inputText += String.fromCharCode(character);
      }
    }
    return inputText;
  }
};

export default cipher;
