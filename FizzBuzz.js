

class FizzBuzz{
    constructor(upTo){
        this.value = ""
        this.upTo= upTo
        this.comenceSequence()
    }

    comenceSequence(){
        for(let i = 1; i<this.upTo; i++ ){
            let translation = this.translate(`${i}`) || i
            this.value+= `${translation}\n`
        }
    }

    translate(i){
        let returnValue;
        if(i%3==0 || this.hasValue(i, 3)){
            returnValue = "Fizz"
        }
        if(i%5==0 || this.hasValue(i, 5)){
            if(returnValue){returnValue+="Buzz"}else{returnValue="Buzz"}
        }
        return returnValue
    }

    hasValue(i, searchedNumber){
        for(let digit =0;digit<i.length; i++){
            if (i[digit]==searchedNumber){return true}
        }
        return false
    }
}

module.exports = {
    FizzBuzz
}