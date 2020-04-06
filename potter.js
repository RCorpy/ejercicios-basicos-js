class Potter{
    constructor(bookArray){
        this.bookPrice = 8
        this.bookArray = bookArray
        this.totalPrice = 0
        this.bookDict = {}
        this.discounts = {0: 0, 1: 0, 2: 5, 3:10, 4:20, 5:25}
        this.dictMaker()
        this.priceCalc(Object.values(this.bookDict))
        
    }

    dictMaker(){
        this.bookArray.forEach(element => {
            this.bookDict[element] = (this.bookDict[element] + 1) || 1
        });
    }

    priceCalc(amountOfEach){
        
        if(amountOfEach.reduce( (total, number) => {
            return total+number
        }, 0) <= 0) {return}
        let count = 0
        let newArray = []
        amountOfEach.forEach(element => {if(element >0){
            count +=1
            newArray.push(element-1)
        }})
        this.totalPrice += count*this.bookPrice*(1-(this.discounts[count]/100))
        this.priceCalc(newArray)

        

    }

}



module.exports = {Potter}