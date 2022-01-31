let arr1 = [];
function pushToStr() {
  let inputText = document.getElementById('frame').value;
  
  arr1.unshift(inputText),

  console.log(arr1)

  document.getElementById('p2').innerHTML = arr1;
  console.log (inputText)

  }

  function emptyArr() {
    console.log(arr1.length)
    
      }



const firstGame = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  numGuesses: 0,
  prevGuesses: [],

  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    
    this.getGuess();
    console.log(this.secretNum)
  },

  pushToStr: function(){
    let inputText = document.getElementById('frame').value;
    this.prevGuesses.unshift(inputText),
    document.getElementById('p2').innerHTML = this.prevGuesses;
    console.log (inputText)
  
    }

   getGuess: function(){
    let guessNum = 0;
    guessNum = parseInt (pushToStr())
    while ((isNaN(guessNum)) || guessNum < this.smallerNum || guessNum > this.biggestNum){
    guessNum = parseInt(prompt (`This is not a valid number! Please enter a number between ${this.smallestNum} and ${this.biggestNum}`))} 

    this.prevGuesses.unshift(guessNum) 

    this.render()

    console.log(this.prevGuesses[0])
      
    },
    
    

render: function(){
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







function resetButton() {
  document.getElementById("p1").innerHTML = "Your numbers: ";
 }

function applyButton() {
  document.getElementById("p1").innerHTML = "Your numbers: 123";
 }

let test = document.getElementById("test").innerHTML
console.log(test)