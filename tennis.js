
class Tenis{
    constructor(){

        this.player = []
        this.scoreboard = [[0,0,0],[0,0,0]]
        this.startingMethod()
        
    }
    startingMethod(){
        let player1 = new Player("Marlo")
        let player2 = new Player("Ramon")
        this.player.push(player1)
        this.player.push(player2)
    }

    updateScoreboard(){

        this.scoreboard[0][0] = this.player[0].setScore
        this.scoreboard[0][1] = this.player[0].gameScore
        this.scoreboard[0][2] = this.player[0].points

        this.scoreboard[1][0] = this.player[1].setScore
        this.scoreboard[1][1] = this.player[1].gameScore
        this.scoreboard[1][2] = this.player[1].points
    }
    point(who, times){
        for ( let x of this.player){
            for (let i=0; i<times; i++){

                if (x.name == who) {
                    x.points += 15

                    if (x.points ==45) {
                        x.points = 40
                        this.checkForDeuce()
                    }
                    if (x.points == 55){
                        x.gameScore += 1
                        //resetear poitns
                    }
                }
            }
        }
        
        this.updateScoreboard()
    }
}

class Player{
    constructor(name, members = 1, set= 0, game = 0, points = 0){
        this.name = name
        this.members =members
        this.setScore = set
        this.gameScore = game
        this.points = points
    }
}


module.exports = {
    Tenis,
    Player
}

//sets (0-2) <-- juegos (0-6)<-- puntuacion (0-15-30-40)