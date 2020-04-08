class OcaGame{
  constructor(){
    this.players = []
  }
  
  addPlayer(name){

    for (let i = 0; i < this.players.length; i++){
        if (this.players[i].name == name){
            console.log(`${name}: already existing player`)
            return false
        }
    }
    this.players.push(new Player(name))
  }
}

class Player{
  constructor(name){
    this.name = name
    this.position = 1
  }

  rolls(x, y){
    let sentence = `${this.name} rolls ${x}, ${y}. ${name} moves from ${this.position} to `

    this.position += (x+y)
    if(this.position<64){sentence += this.position}
    else{
        sentence += 63
        this.position -= this.position%63*2
        sentence +=`. ${this.name} bounces! ${this.name} returns to ${this.position}`
    }
    

    console.log(sentence+this.win())
  }

  win(){
      if(this.position == 63){return `${this.name} Wins!!`}
  }
}

module.exports = {
  OcaGame,
  Player
}