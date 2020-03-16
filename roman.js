var convertor = {
    0 : ["I","V"],
    1 : ["X", "L"],
    2 : ["C", "D"],
    3 : ["M", "T"]
}

class Romans{
    constructor(numberString){
        this.numberString = numberString.toString();
        this.result = "";
        
    }
    convert() {

        for(let i = 0; i<this.numberString.length;  i ++){

            let convertingNumber = this.numberString[this.numberString.length-i-1];

            if(convertingNumber%5 == 4){
                if(convertingNumber==4){
                    this.result = convertor[i][0]+convertor[i][1] + this.result;
                }
                else{
                    this.result = convertor[i][0]+convertor[i+1][0]+ this.result;
                }
            }
            else{
                this.result = convertor[i][0].repeat(convertingNumber%5) + this.result;
                if(convertingNumber>=5){
                    this.result = convertor[i][1] + this.result
                }
            }
        }
    }
}

module.exports = {
    Romans
  };
  