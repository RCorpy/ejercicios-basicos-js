const values = {"S":1, "M":0.5}

class Scuba{
    constructor(instructions){
        this.instructions = instructions
        this.metersDeep = 0
        this.oxigen = 150
        this.consumption = 0
        this.score= 0
        this.test = "T"
        this.execute()
    }

    execute(){
        this.instructions.forEach(element => {
            let instruction = this.validate(element)

            switch(instruction){
                case "S":
                    this.metersDeep -= 1
                    break
                case "B":
                    this.metersDeep += 1
                    break
                case "M":
                    break
                case "dead":
                    this.metersDeep = 0
                    this.score = 0
                    break
            }
            this.oxigen -= this.consumption
            this.score += this.metersDeep

        });
    }

    validate(letter){
        if(letter !== "B" && letter !== "S"){letter = "M"}
        
        this.consumption = values[letter] || 2*(this.metersDeep+1)

        if((letter =="S" || letter =="M") && this.metersDeep<1){
            letter = "M"
            this.consumption = 0}

        if(this.consumption<=this.oxigen){return letter}

        return "dead"
    }
}

module.exports = {
    Scuba
}