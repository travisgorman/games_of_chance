function Card (val, suit) {
  this.val = val
  this.suit = suit
}
function Hand(){}
Hand.prototype.c1 = new Card( pickVal(), pickSuit() )
Hand.prototype.c2 = new Card( pickVal(), pickSuit() )
Hand.prototype.c3 = new Card( pickVal(), pickSuit() )
Hand.prototype.c4 = new Card( pickVal(), pickSuit() )
Hand.prototype.c5 = new Card( pickVal(), pickSuit() )

let hand = new Hand

console.log( hand.c1, hand.c2, hand.c3, hand.c4, hand.c5 );

// generate a random number between 1 and 4
// if it's even, the suit is black. if odd, it's red.
// make binary choice between red[0] and red[1] (same with black)
// use Math.random to pick a number between 1 and 0 to use as index
function pickSuit(){
  let red = ['hearts', 'diamonds']
  let black = ['spades', 'clubs']
  let suit = Math.ceil(Math.random()*4)
  return (suit % 2 === 0) ?
      black[Math.round(Math.random())] :
      red[Math.round(Math.random())]
}

// pick value by generating a random number 1-13
// conditional logic to define the face cards.
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
// console.log( pickVal() );
// console.log( pickSuit() );
// yay, these work!

// use these two functions to determine a suit and value
// with a ternary conditional for grammar

function drawCard(){
  let val = pickVal()
  let suit = pickSuit()
  return (val === "Ace" || val === 8 ) ?
  `You drew an ${val} of ${suit}` : 
  `You drew a ${val} of ${suit}`
}

console.log( drawCard() );

//
function Die(value){
  let self = this;
  this.value = value;
  this.roll = function(){
    self.value = Math.ceil(Math.random()*6)
    return self.value
  }
}
//

let d1 = new Die()
let d2 = new Die()
let r1 = d1.roll()
let r2 = d2.roll()
let play = r1 + r2

console.log( `

  Die 1 rolled a ${r1}. 
  Die 2 rolled a ${r2}. 
  You rolled a ${play}.

` );
// initiate an arr.length === 11, set each index to 0.
// for-loop set to iterate 1000 times
// on each iteration let result equal the sum of both dice
// since index 0 is 2, 1 is 3, etc...[result - 2] increment tally

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

console.log('getProbabilities: ', getProbabilities() );
