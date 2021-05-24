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

        const character = string.charCodeAt(i);
        const characterLowerCase = character >= 97 && character <= 122;
        const characterUpperCase = character >= 65 && character <= 90;
        const characterNumber = character >= 45 && character <= 57;
        let offsetTemp = offset;

        if(offsetTemp < 0) {
          if(characterLowerCase || characterUpperCase) {
            offsetTemp = 26 + (offsetTemp % 26);
          } else if(characterNumber) {
            offsetTemp = 10 + (offsetTemp % 10);
          }
        }

        if(characterLowerCase) {
          inputText += String.fromCharCode((character - 97 + offsetTemp)% 26 + 97);
        } else if(characterUpperCase) {
          inputText += String.fromCharCode((character - 65 + offsetTemp)% 26 + 65);
        } else if(characterNumber) {
          inputText += String.fromCharCode((character - 48 + offsetTemp)% 10 + 48);
        } else  {
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

      const character = string.charCodeAt(i);
      const characterLowerCase = character >= 97 && character <= 122;
      const characterUpperCase = character >= 65 && character <= 90;
      const characterNumber = character >= 45 && character <= 57;
      let offsetTemp = offset;

      if(offsetTemp < 0) {
        if(characterLowerCase || characterUpperCase) {
          offsetTemp = 26 + (offsetTemp % 26);
        } else if(characterNumber) {
          offsetTemp = 10 + (offsetTemp % 10);
        }
      }

      if(characterLowerCase) {
        inputText += String.fromCharCode((character - 97 - offsetTemp + 52)  % 26 + 97);
      } else if(characterUpperCase) {
        inputText += String.fromCharCode((character + 65 - offsetTemp) % 26 + 65);
      } else if(characterNumber) {
        inputText += String.fromCharCode((character - 48 - offsetTemp + 10) % 10 + 48);
      } else  {
        inputText += String.fromCharCode(character);
      }
    }
    return inputText;
  }
};

export default cipher;
