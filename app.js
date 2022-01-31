
const firstGame = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  numGuesses: 0,
  prevGuesses: [],

  play: function() {
    // this function generates random number and stores as a value in secretNum:
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    
    this.getGuess();
    //console.log(this.secretNum)
  },

  getGuess: function(){
    //this method takes user input and pushes to an array
    let guessNum = 0;
    guessNum = parseInt (prompt (`Enter a guess number from ${this.smallestNum} and ${this.biggestNum}`))
    while ((isNaN(guessNum)) || guessNum < this.smallerNum || guessNum > this.biggestNum){
    guessNum = parseInt(prompt (`This is not a valid number! Please enter a number between ${this.smallestNum} and ${this.biggestNum}`))} 

    this.prevGuesses.unshift(guessNum) 

    this.render()

    //console.log(this.prevGuesses[0])
      
    },
    
    render: function(){
  //this method compares 2 numbers and shows result
  let newNum = this.prevGuesses[0]
      if(this.prevGuesses[0] === this.secretNum) {
        alert (`Congrats! You guessed the number correctly.`)
      } else{ 
      while((isNaN(newNum)) || this.prevGuesses[0] !== this.secretNum) {
          if(this.prevGuesses[0] > this.secretNum) {
            newNum = parseInt (prompt (`Your number is too high. Try choose lower number! Your guesses: ` + this.prevGuesses.toString()))
            this.prevGuesses.unshift(newNum)
            this.render();
          } else if (this.prevGuesses[0] < this.secretNum) {
            newNum = parseInt (prompt (`Your number is too low. Try choose higher number! Your guesses: ` + this.prevGuesses.toString()))
            this.prevGuesses.unshift(newNum)
          } else {
            this.prevGuesses.length = 0;
            this.getGuess()
          }
        }
      }
      
    
    },
}


// this works => 
//console.log(firstGame.getGuess())
// console.log(firstGame.play())
//console.log(firstGame.prevGuesses[0])



firstGame.play();



//------------------------------- this is another method ----
  // getGuess: function(){
  //   let guessNum = 0;
  //   guessNum = parseInt (prompt (`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
  //   if (guessNum > this.biggestNum) {
  //       prompt (`Your number is higher than ${this.biggestNum} please choose number between ${this.biggestNum} and ${this.smallestNum}`)
  //     } else if (guessNum < this.smallestNum) {
  //       prompt (`Your number is smaller than ${this.smallesttNum} please choose number between ${this.biggestNum} and ${this.smallestNum}`)
  //     } else { 
  //       if (isNaN(guessNum)){ 
  //       prompt (`This is not a number! Please enter a number between ${this.biggestNum} and ${this.smallestNum}`)
  //   }
    
  //   }

  //     return guessNum 

  // },
//-----------------------------------