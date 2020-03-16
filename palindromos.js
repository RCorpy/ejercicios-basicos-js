
class Palindromos{
  constructor(word){
    this.word = word.toLowerCase().trim().replace(/[^a-zA-Z ]/g, "")
  }

  isPalindrome (){
    let wordEnd = this.word.length-1;

    for(let i = 0; i<wordEnd/2;i++){
      if (this.word[i]!==this.word[wordEnd-i]){
        return false
      }
    }

    return true;
}
}
module.exports = {
  Palindromos
};
