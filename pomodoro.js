class Pomodoro{
    constructor(timer=25){
        this.timer = timer
        this.startedTime = 0
        this.goalTime = 0
        this.pomodoros = 0
    }

    start(){
        this.startedTime = new Date().getTime()
        this.goalTime = this.addMinutes(this.startedTime, this.timer)
    }

    addMinutes(date, minutes) {
        return date + (minutes*60000);
    }

    timeLeft(){
        return this.goalTime - new Date().getTime()
    }

    reachedTime(){
        return (this.goalTime <= new Date().getTime())
    }

}

module.exports = {
    Pomodoro
}