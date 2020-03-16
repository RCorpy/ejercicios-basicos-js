
class CashRegister{
    constructor(price, cash, cid){
        this.price = price
        this.cash = cash
        this.cid = cid
        this.toReturn = (cash - price)*100 // *100 to avoid those .000000000000001 mistakes
        this.change = ""
        this.status = "open"
    }
    calculateChange(){
        if (this.toReturn <0){
            this.status = "lul?"
            this.change = "lululul"
            return 
        }else if (this.toReturn ==0){
            return
        }else{
            if(this.change!=="") {this.change += ", ";}
            let shiftedItem = this.cid.shift()
            let x = Math.floor(this.toReturn/(shiftedItem[1]*100))
            this.change += `${x} ${shiftedItem[0]}`
            this.toReturn -= x*(shiftedItem[1]*100)
            if(this.cid.length>0){
                this.calculateChange()
            }
        }
    }

    checkCashRegister(){
        let funds = 0
        for (let i =0; i<this.cid.length; i++){
            funds += (this.cid[i][1]*100)*this.cid[i][2]
        }

        if (funds < this.toReturn){ 
            this.status = "INSUFFICIENT_FUNDS"}
        else if (funds == this.toReturn){ 
                this.status = "closed"}
        else{
            this.calculateChange()}

        return [this.status, this.change]
    }
}


module.exports = {
    CashRegister
}