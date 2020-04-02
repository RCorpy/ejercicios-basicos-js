cardDecoder = {
    T: "10",
    J: "11",
    Q: "12",
    K: "13",
    A: "14"
}

cardUndecoder = {
    10: "T",
    11: "J",
    12: "Q",
    13: "K",
    14: "A"
}

const CARDSINHAND = 5;


class Poker{
    constructor(handArray){
        this.handArray = handArray
        this.handValue = ""
        this.isFlush = this.checkForFlush()
        this.decodedHand = this.decodeHand()
        this.isStraight = this.checkForStraight()
        //Having Flush or Straight excludes the posibility of pairs or other combinations
        if(this.isFlush||this.isStraight){
            this.straightOrFlushHandValue()
        }else{
            this.duplicates = this.checkForDuplicates()
            this.duplicatesHandValue()
        }
        
    }

    checkForFlush(){
        //checking the first suit
        let suit = this.handArray[0][1]
        //checking
        for (let x=1; x<CARDSINHAND; x++){
            if (this.handArray[x][1]!==suit){
                return false
            }
        }
        return true
    }

    decodeHand(){
        //we dont need the suits anymore, so only index 0 of each card, and we need only numbers to see for the straight, so we convert with the cardDecoder
        return this.handArray.map(x=>{return (cardDecoder[x[0]] || x[0])})
    }

    checkForStraight(){
        let auxArray = this.decodedHand.map(Number).sort(function(a,b){return a-b})
        this.decodedHand = auxArray
        //We check if we have an A and we could make a lower straight, giving it the value 1 instead of 14 and keeping them sorted
        if (auxArray[4] == 14 && auxArray[0]==2){
            auxArray.unshift(1)
            auxArray.splice(-1,1)
        }
        //check if all the cards are 1 more on  value than the previous
        for(let i = 0; i<CARDSINHAND-1; i++){
            if (auxArray[i]+1!==auxArray[i+1]){
                return false
            }
        }
        return true
    }

    checkForDuplicates(){
        let value = 0
        let counter = {}
        for (let i= 0; i<CARDSINHAND; i++){
            if(this.decodedHand[i]==value){
                counter[value]= (counter[value]+1) || 2;
            }else{
                value = this.decodedHand[i]
            }
        }
        return counter
    }

    straightOrFlushHandValue(){
        //the [3]+1 is to avoid the problem of the straight that goes from A to 5, so we check the "second highest card" and add 1
        if(this.isStraight && this.isFlush){
            this.handValue = `StraightFlush, highcard is ${cardUndecoder[this.decodedHand[3]+1] || this.decodedHand[3]+1}`
        }else if(this.isFlush){
            this.handValue = `Flush, highcard is ${cardUndecoder[this.decodedHand[4]] || this.decodedHand[4]}`
        }else{
            this.handValue = `Straight, highcard is ${cardUndecoder[this.decodedHand[3]+1] || this.decodedHand[3]+1}`
        }
    }

    duplicatesHandValue(){
        //only highcard
        let keys = Object.keys(this.duplicates)
        let highcard;
        let lowcard;
        if (keys.length==2 && (this.duplicates[keys[0]]==3 || this.duplicates[keys[1]]==3)){
            if (this.duplicates[keys[0]]==3){
                highcard = cardUndecoder[keys[0]] || keys[0]
                lowcard = cardUndecoder[keys[1]] || keys[1]
            }
            this.handValue = `Full House, ${highcard || cardUndecoder[keys[1]] || keys[1]}s over ${lowcard || cardUndecoder[keys[0]] || keys[0]}s`    
        }else if(keys.length == 2){
            this.handValue = `Two Pair, ${cardUndecoder[keys[1]] || keys[1]}s over ${cardUndecoder[keys[0]] || keys[0]}s` 
        }else if(keys.length == 0){
            this.handValue = `Highcard of ${cardUndecoder[this.decodedHand[4]] || this.decodedHand[4]}`
        }
        else{
            switch(this.duplicates[keys[0]]){
                case 4:
                    this.handValue=`Four of a kind, ${cardUndecoder[keys[0]] || keys[0]}s`
                    break
                case 3:
                    this.handValue=`Three of a kind, ${cardUndecoder[keys[0]] || keys[0]}s`
                    break
                case 2:
                    this.handValue=`Pair, ${cardUndecoder[keys[0]] || keys[0]}s`
            }
        }
    }

}


module.exports = {
    Poker
  };
  