
class Bowling{
    constructor(scoreArray){
        this.scoreArray = scoreArray
        this.score = 0
        this.calculateResult()
    }

    calculateResult(){
        for(let i = 0 ; i<this.scoreArray.length; i++){
            this.score += this.calculateCell(i)
        }
    }

    calculateCell(index){
        let cellTotal = 0
        if (this.scoreArray[index][1] !== "/" && this.scoreArray[index][0] !== "X"){
            return Number(this.scoreArray[index][0]) + Number(this.scoreArray[index][1]) 
        } else{
            let combination = (this.scoreArray[index+1] || "0" ) + (this.scoreArray[index+2] || "0")
            cellTotal = 10 + Number(combination[0])
            if(combination[0]=="X"){cellTotal =20}
            if(this.scoreArray[index][0] == "X"){
                cellTotal+=Number(combination[1])
                if (combination[1]=="X"){cellTotal =30}
                else if ( combination[1] == "/"){cellTotal =20}
            }
        }
        return cellTotal
    }
}


module.exports = {
    Bowling
}