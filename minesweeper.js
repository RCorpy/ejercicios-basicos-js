
class MineSweeper{
    constructor(rows, columns, mines){
        this.size = [rows, columns]
        this.mines = mines
        this.map= ""
        this.minesPos = this.mineMaker()
        this.minesPosStringed = this.Stringifier()
        this.mapMaker()
        this.output = ""
        this.produceOutput()
    }

    mineMaker(){
        //there is a possibility with this method that 2 mines are created in the same place
        let minesPos= []
        for (let k=0; k<this.mines;k++){
            let minePos = [Math.floor(Math.random()*this.size[0]), Math.floor(Math.random()*this.size[1])]
            minesPos.push(minePos)
        }
        //delete duplicates
        return [...new Set(minesPos)]; 
    }

    mapMaker(){
        for(let i = 0; i<this.size[0]; i++){
            for(let j = 0; j<this.size[1]; j++){
                if(this.minesPosStringed.includes(i.toString()+j)){
                    this.map += "*"
                }else{this.map += "."}
            }
            this.map += "\n"
        }
    }

    Stringifier(){
        let returnValue = []
        for (let x of this.minesPos){
            let stringedValue = ""+x[0]+x[1]
            returnValue.push(stringedValue)
        }
        return returnValue
    }

    produceOutput(){
        for(let i = 0; i<this.size[0]; i++){
            for(let j = 0; j<this.size[1]; j++){
                if(this.minesPosStringed.includes(i.toString()+j)){
                    this.output += "*"
                }else{this.output += this.countNeighbours(i,j)}
            }
            this.output+= "\n"
        }
    }

    countNeighbours(i,j){
        let count = 0
        for(let w=0; w<this.mines;w++){
            if(i+1==this.minesPos[w][0] || i == this.minesPos[w][0] || i-1 == this.minesPos[w][0]){
                if(j+1==this.minesPos[w][1] || j == this.minesPos[w][1] || j-1 == this.minesPos[w][1]){
                    count+=1
                }
            }
        }
        return count

    }
}

module.exports = {
    MineSweeper
}