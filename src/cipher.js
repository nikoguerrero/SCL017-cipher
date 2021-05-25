function caesarCipher (character, offset) {
  const characterLowerCase = character >= 97 && character <= 122;
  const characterUpperCase = character >= 65 && character <= 90;
  const characterNumber = character >= 48 && character <= 57;

  if(characterLowerCase || characterUpperCase || characterNumber) {
  
    let modulo = 26;
    let ascii = 65;

    if(characterLowerCase) {
      ascii = 97;
    } else if(characterNumber) {
      modulo = 10;
      ascii = 48;
    }

    let charModulo = ((character - ascii) + offset) % modulo;
    if(charModulo < 0) {
      charModulo = charModulo + modulo;
    }
    return String.fromCharCode((charModulo + ascii));
  } else {
    return String.fromCharCode(character);
  }
}

const cipher = {
  encode: function(offset, string) {
    if(typeof offset !== "number") {
      throw new TypeError("error en valor de offset");
    }

    if(typeof string !== "string") {
      throw new TypeError("error en valor de string");
    }

    // charCode -> UNICODE (ASCII hasta 128)
    let output = "";

    for(let i = 0; i < string.length; i++){

        const character = string.charCodeAt(i);
        output += caesarCipher(character, offset);
    }
    return output;
  },
  
  decode: function(offset, string) {
    if(typeof offset !== "number") {
      throw new TypeError("error en valor de offset");
    }

    if(typeof string !== "string") {
      throw new TypeError("error en valor de string");
    }

    let output = "";

    for(let i = 0; i < string.length; i++){

      let character = string.charCodeAt(i);
      output += caesarCipher(character, -offset);
    }
    return output;
  }
};

export default cipher;

