class Greeting{
    constructor(array=-1){
        this.array = array
        this.arrayOfMayus = []
        this.generateMayus()
        this.output = this.generateOutput(this.array)
        this.output += `. ${this.generateOutput(this.arrayOfMayus).toUpperCase()}`
        this.output = this.output.trim()

    }

    generateOutput(selectedArray){
        let output = "Hello"
        if (selectedArray == -1 ){return output+", my friend"}
        if (selectedArray.length == 1){ return output+`, ${selectedArray[0]}`}
        for(let name= 0; name<selectedArray.length; name++){
            if(name == selectedArray.length-1){return output + `and ${selectedArray[name]}`}
            output += `, ${selectedArray[name]} `
        }
        return ""
    }

    generateMayus(){
        let minusArray = []
        if(this.array.length>0){
        for (let name of this.array){
            if(isUpperCase(name)){this.arrayOfMayus.push(name)}
            else{minusArray.push(name)}
        }
        this.array = minusArray || -1
        }
    }
    
}

function isUpperCase(str) {
    return str === str.toUpperCase();
}

module.exports = {
    Greeting
}