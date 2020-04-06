class Song{
    constructor(verses){
        this.verses = verses
        this.verseArray = []
    }

    createSong(){
        for(let i = 0; i<this.verses;i++){
            this.verseArray.push(this.createVerse(i))
        }
    }

    createVerse(i){
        return `${this.noMore(i)} ${this.bottles(i)} of beer on the wall, ${this.noMore(i)} ${this.bottles(i)} of beer.\n${this.takeOneDown(i)}, ${this.noMore(i-1)} ${this.bottles(i-1)} of beer on the wall.`
    }

    bottles(i){
        if(i==1){return "bottle"}
        return "bottles" 
    }

    takeOneDown(i){
        if(i==1){return "Take it down, pass it around"}
        if(i==0){return "Go to the store and buy some more"}
        return "Take one down, pass it around"
    }
    noMore(i){
        if(i==0){return "no more"}
        if(i==-1){return 99}
        return i
    }
}

module.exports = {
    Song
}