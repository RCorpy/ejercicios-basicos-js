class Item{
    constructor(name, sellIn, quality){
        this.name = name
        this.sellIn = sellIn
        this.quality = quality
    }

    dayPass(){
        this.sellIn -= 1
        if(this.sellIn<0){this.quality -= 1}
        this.quality -=1
        this.validateValues()
    }

    validateValues(){
        if(this.quality<0){this.quality=0}
        else if(this.quality>50){this.quality=50}
    }
}

class Brie extends Item{
    constructor(name, sellIn, quality){
        super(name, sellIn, quality)
    }

    dayPass(){
        this.quality +=1
        this.validateValues()
    }

}

class Sulfuras extends Item{
    constructor(name, sellIn, quality){
        super(name, sellIn, quality)
        this.validateValues()
    }

    dayPass(){
    }

}

class BackStagePass extends Item{
    constructor(name, sellIn, quality){
        super(name, sellIn, quality)
    }

    dayPass(){

        this.sellIn -=1
        if(this.sellIn<0){this.quality = 0}
        else{
            this.quality +=1
            if(this.sellIn<=5){this.quality += 1}
            if(this.sellIn<=10){this.quality += 1}
        }
        this.validateValues()
    }

}

class Conjured extends Item{
    constructor(name, sellIn, quality){
        super(name, sellIn, quality)
    }

    dayPass(){
        this.sellIn -= 1
        if(this.sellIn<0){this.quality -= 2}
        this.quality -=2
        this.validateValues()
    }

}

module.exports = {
    Item,
    Brie,
    Sulfuras,
    BackStagePass,
    Conjured
}