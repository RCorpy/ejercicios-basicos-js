const standardPrices = {
    "A" : 50,
    "B" : 30,
    "C" : 10
}


class Checkout{
    constructor(pricingRules){
        this.pricingRules = pricingRules
        this.itemArray =[]
        this.totalCost = 0
        this.test = ""
    }

    scan (item){
        this.itemArray.push(item)
    }

    total(){
        let itemDict = {}
        this.itemArray.forEach( item => itemDict[item]=(itemDict[item] || 0)+1)
        this.calculateByItem(itemDict)
    }

    calculateByItem(itemDict){
        let keys = Object.keys(itemDict)
        itemDict = this.applyRules(itemDict)
        keys.forEach( item => this.totalCost+=standardPrices[item]*itemDict[item])
    }

    applyRules(itemDict){
        //Decode rules
        this.pricingRules.forEach(rule =>{
            let parts = rule.split(" for ")
            let product = parts[0].charAt(parts[0].length-1)
            let amount = Number(parts[0].slice(0, -1))
            let price = Number(parts[1])
            this.test = product

            //apply rules
            if(amount<=itemDict[product]){
                let quantity = Math.floor(itemDict[product]/amount)
                this.totalCost += price*quantity
                itemDict[product]-= quantity*amount
            }
        })
        return itemDict
    }
}

module.exports = {
    Checkout
}