# Practice using constructors by simulating cards and dice. 



[All the action is in the console.](http://travis.bingo/games_of_chance/)

```js
function Card (val, suit) {
  this.val = val
  this.suit = suit
}
```

### Pick the Suit
* generate a random number between 1 and 4
* if it's even, the suit is black. if odd, it's red.
* make binary choice between `red/black[0]` and `red/black[1]`  
* use `Math.random` to pick a number between 1 and 0 and use that as the index to decide which suit it is.

```js

function pickSuit(){
  let red = ['hearts', 'diamonds']
  let black = ['spades', 'clubs']
  let suit = Math.ceil(Math.random()*4)
  return (suit % 2 === 0) ?
      black[Math.round(Math.random())] :
      red[Math.round(Math.random())]k
}
```

### Pick the Value
* pick the value by generating a random number 1-13
* conditional logic to define the face cards.

```js

function pickVal(){
  let val = Math.ceil(Math.random()*13)
  if (val === 11){
    val = "Jack"
  }else if (val === 12){
    val = "Queen"
  }else if (val === 13){
    val = "King"
  }else if (val === 1){
    val = "Ace"
  }
  return val
}
```

### Draw A Card
* use the two functions above to determine a suit and value
* with a ternary conditional for grammar

```js
function drawCard(){
  let val = pickVal()
  let suit = pickSuit()
  return (val === "Ace" || val === 8 ) ?
  `You drew an ${val} of ${suit}` : 
  `You drew a ${val} of ${suit}`
}
```

### Create a Die
*Create a constructor that builds objects representing a six sided dice. The die should keep track of the current value that it shows (1-6) and have a roll method that will simulate rolling the die. Rolling the die should change the current number.*

```js

function Die(value){
  let self = this;
  this.value = value;
  this.roll = function(){
    self.value = Math.ceil(Math.random()*6)
    return self.value
  }
}
```

### Get Probabilities
*Create a function called getProbabilities that will simulate rolling two dice 1000 times. The function should return an array that shows the number of times the sum of the two die added up to 2, 3, 4, ... 12. *

* initiate an arr.length === 11, set each index to 0.
* for-loop set to iterate 1000 times
* on each iteration let result equal the sum of both dice
* since index 0 is 2, 1 is 3, etc...[result - 2] increment tally

```js

function getProbabilities(){
  let d1 = new Die();
  let d2 = new Die();
  var arr = [0,0,0,0,0,0,0,0,0,0,0];
    for( var i = 0; i <= 999; i++){
      let result = ( d1.roll() + d2.roll() )
      arr[(result-2)]++   
   }
   return arr;
}
```
