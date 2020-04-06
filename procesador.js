class Procesador{
    constructor(text, word){
        this.text = text
        this.word = word
        this.wordMap = {}
        this.mapWords()
        this.order = this.orderMap()
    }

    mapWords(){
        this.text.split(" ").forEach(element => this.wordMap[element] = (this.wordMap[element]+1) || 1 )
        return this.orderMap()
    }

    isWordPresent(){
        return this.wordMap[this.word] || false
    }

    orderMap(){
        return Object.keys(this.wordMap).sort((a, b) => this.wordMap[b] - this.wordMap[a]);
    }

    mostUsedWord(){
        return this.order[0]
    }
}

module.exports ={
    Procesador
}