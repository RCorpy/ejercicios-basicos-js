const codeValueForA = 97
const codificationShift = 13
const lettersInAlphabet = 26


class Decoder{
    constructor(originalString){
        this.originalString = originalString;

    }
    transform(){
        let result = ""
        for(let i = 0; i< this.originalString.length ; i++){
            result += String.fromCharCode((this.originalString.charCodeAt(i)-codeValueForA+codificationShift)%lettersInAlphabet+codeValueForA)
        }
        return result
    }
}

module.exports = {
    Decoder
}