function Game(){
  const username = prompt("Input your name")
  const guess = prompt(`hi ${username}, please make a guess`)
  TheGuessgame(+guess)
}

let range = 2;
let userpoint = 0;

function TheGuessgame(guess){
  const answer = Math.floor((Math.random() * range) + 1)
console.log('answer', answer);

if (guess === answer){
  range++;
  userpoint++;
  console.log('You have moved the next stage')
  guess = prompt('Enter a new guess')
  TheGuessgame(+guess)
}
  else {
    console.log('Game Over')
    console.log('Your total point is', userpoint)
  }
}

Game()
  