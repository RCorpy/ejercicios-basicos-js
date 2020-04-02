
const GETCARDINALS = {
    "01":"Norte",
    "10":"Este",
    "0-1":"Sur",
    "-10":"Oeste"
}

class MarsRover{
    constructor(landingPos, instructions){
        this.landingPos = landingPos
        this.finalPos = landingPos
        this.vector = [0,1]

        this.execute(instructions)
        this.cardinal = GETCARDINALS[this.vector[0].toString()+this.vector[1]]
    }

    execute(instructions){
        const transformer = {"L": 1, "R":-1}
        for (let inst of instructions){
            if(inst=="M"){
                this.finalPos= [this.finalPos[0]+this.vector[0],this.finalPos[1]+this.vector[1]]
            }
            else{
                let transform = transformer[inst]
                this.vector = [-this.vector[1]*transform, this.vector[0]*transform]
            }
        }
    }


}

module.exports = {
    MarsRover
}