const cipher = {
  encode: function(offset, string) {

    // charCode -> UNICODE (ASCII hasta 128)
    let charCodeArray = [];
      
    for(let i = 0; i < string.length; i++){
        let character = string.charCodeAt(i);
        let code = (character - 65 + offset) % 26 + 65;
        charCodeArray += String.fromCharCode(code);
    }
    return charCodeArray;
  }
};

cipher.decode = function(offset, string) {
    let charCodeArray = [];
      
    for(let i = 0; i < string.length; i++){
        let character = string.charCodeAt(i);
        let code = (character - 65 - offset) % 26 + 65;
        charCodeArray += String.fromCharCode(code);
    }
    return charCodeArray;
};
export default cipher;
