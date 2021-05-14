const cipher = {
  encode: function(offset, string) {
    if(typeof offset !== "number") {
      throw new TypeError("error en valor de offset");
    }

    if(typeof string !== "string") {
      throw new TypeError("error en valor de string");
    }

    // charCode -> UNICODE (ASCII hasta 128)
    let charCodeArray = [];
      
    for(let i = 0; i < string.length; i++){
        let character = string.charCodeAt(i);
        if(character >= 97 && character <= 122) {
          charCodeArray += String.fromCharCode((character - 97 + offset)% 26 + 97);
        } else if(character >= 65 && character <= 90) {
          charCodeArray += String.fromCharCode((character - 65 + offset)% 26 + 65);
        } else {
          charCodeArray += String.fromCharCode(character);
        }
    }
    return charCodeArray;
  },
  
  decode: function(offset, string) {
    if(typeof offset !== "number") {
      throw new TypeError("error en valor de offset");
    }

    if(typeof string !== "string") {
      throw new TypeError("error en valor de string");
    }

    let charCodeArray = [];
    
    for(let i = 0; i < string.length; i++){
      let character = string.charCodeAt(i);
      console.log(((character - 97 + offset) % 26) + 97);

      if(character >= 97 && character <= 122) {
        charCodeArray += String.fromCharCode(((character - 97 + offset) % 26) + 97);
      } else if(character >= 65 && character <= 90) {
        charCodeArray += String.fromCharCode((character + 65 - offset) % 26 + 65);
      } else {
        charCodeArray += String.fromCharCode(character);
      }
    }
    return charCodeArray;
  }
};

export default cipher;
