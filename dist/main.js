(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function Card(val, suit) {
  this.val = val;
  this.suit = suit;
}
// generate a random number between 1 and 4
// if it's even, the suit is black. if odd, it's red.
// make binary choice between red[0] and red[1] (same with black)
// use Math.random to pick a number between 1 and 0 to use as index
function pickSuit() {
  var red = ['hearts', 'diamonds'];
  var black = ['spades', 'clubs'];
  var suit = Math.ceil(Math.random() * 4);
  return suit % 2 === 0 ? black[Math.round(Math.random())] : red[Math.round(Math.random())];
}

// pick value by generating a random number 1-13
// conditional logic to define the face cards.
function pickVal() {
  var val = Math.ceil(Math.random() * 13);
  if (val === 11) {
    val = "Jack";
  } else if (val === 12) {
    val = "Queen";
  } else if (val === 13) {
    val = "King";
  } else if (val === 1) {
    val = "Ace";
  }
  return val;
}
// console.log( pickVal() );
// console.log( pickSuit() );
// yay, these work!

// use these two functions to determine a suit and value
// with a ternary conditional for grammar

function drawCard() {
  var val = pickVal();
  var suit = pickSuit();
  return val === "Ace" || val === 8 ? 'You drew an ' + val + ' of ' + suit : 'You drew a ' + val + ' of ' + suit;
}

console.log(drawCard());

//
function Die(value) {
  var self = this;
  this.value = value;
  this.roll = function () {
    self.value = Math.ceil(Math.random() * 6);
    return self.value;
  };
}
//

var d1 = new Die();
var d2 = new Die();
var r1 = d1.roll();
var r2 = d2.roll();
var play = r1 + r2;

console.log('\n\n  Die 1 rolled a ' + r1 + '. \n  Die 2 rolled a ' + r2 + '. \n  You rolled a ' + play + '.\n\n');
// initiate an arr.length === 11, set each index to 0.
// for-loop set to iterate 1000 times
// on each iteration let result equal the sum of both dice
// since index 0 is 2, 1 is 3, etc...[result - 2] increment tally

function getProbabilities() {
  var d1 = new Die();
  var d2 = new Die();
  var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (var i = 0; i <= 999; i++) {
    var result = d1.roll() + d2.roll();
    arr[result - 2]++;
  }
  return arr;
}

console.log('getProbabilities: ', getProbabilities());

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsU0FBUyxJQUFULENBQWUsR0FBZixFQUFvQixJQUFwQixFQUEwQjtBQUN4QixPQUFLLEdBQUwsR0FBVyxHQUFYO0FBQ0EsT0FBSyxJQUFMLEdBQVksSUFBWjtBQUNEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFFBQVQsR0FBbUI7QUFDakIsTUFBSSxNQUFNLENBQUMsUUFBRCxFQUFXLFVBQVgsQ0FBVjtBQUNBLE1BQUksUUFBUSxDQUFDLFFBQUQsRUFBVyxPQUFYLENBQVo7QUFDQSxNQUFJLE9BQU8sS0FBSyxJQUFMLENBQVUsS0FBSyxNQUFMLEtBQWMsQ0FBeEIsQ0FBWDtBQUNBLFNBQVEsT0FBTyxDQUFQLEtBQWEsQ0FBZCxHQUNILE1BQU0sS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEVBQVgsQ0FBTixDQURHLEdBRUgsSUFBSSxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsRUFBWCxDQUFKLENBRko7QUFHRDs7QUFFRDtBQUNBO0FBQ0EsU0FBUyxPQUFULEdBQWtCO0FBQ2hCLE1BQUksTUFBTSxLQUFLLElBQUwsQ0FBVSxLQUFLLE1BQUwsS0FBYyxFQUF4QixDQUFWO0FBQ0EsTUFBSSxRQUFRLEVBQVosRUFBZTtBQUNiLFVBQU0sTUFBTjtBQUNELEdBRkQsTUFFTSxJQUFJLFFBQVEsRUFBWixFQUFlO0FBQ25CLFVBQU0sT0FBTjtBQUNELEdBRkssTUFFQSxJQUFJLFFBQVEsRUFBWixFQUFlO0FBQ25CLFVBQU0sTUFBTjtBQUNELEdBRkssTUFFQSxJQUFJLFFBQVEsQ0FBWixFQUFjO0FBQ2xCLFVBQU0sS0FBTjtBQUNEO0FBQ0QsU0FBTyxHQUFQO0FBQ0Q7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxTQUFTLFFBQVQsR0FBbUI7QUFDakIsTUFBSSxNQUFNLFNBQVY7QUFDQSxNQUFJLE9BQU8sVUFBWDtBQUNBLFNBQVEsUUFBUSxLQUFSLElBQWlCLFFBQVEsQ0FBMUIsb0JBQ1EsR0FEUixZQUNrQixJQURsQixtQkFFTyxHQUZQLFlBRWlCLElBRnhCO0FBR0Q7O0FBRUQsUUFBUSxHQUFSLENBQWEsVUFBYjs7QUFFQTtBQUNBLFNBQVMsR0FBVCxDQUFhLEtBQWIsRUFBbUI7QUFDakIsTUFBSSxPQUFPLElBQVg7QUFDQSxPQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsT0FBSyxJQUFMLEdBQVksWUFBVTtBQUNwQixTQUFLLEtBQUwsR0FBYSxLQUFLLElBQUwsQ0FBVSxLQUFLLE1BQUwsS0FBYyxDQUF4QixDQUFiO0FBQ0EsV0FBTyxLQUFLLEtBQVo7QUFDRCxHQUhEO0FBSUQ7QUFDRDs7QUFFQSxJQUFJLEtBQUssSUFBSSxHQUFKLEVBQVQ7QUFDQSxJQUFJLEtBQUssSUFBSSxHQUFKLEVBQVQ7QUFDQSxJQUFJLEtBQUssR0FBRyxJQUFILEVBQVQ7QUFDQSxJQUFJLEtBQUssR0FBRyxJQUFILEVBQVQ7QUFDQSxJQUFJLE9BQU8sS0FBSyxFQUFoQjs7QUFFQSxRQUFRLEdBQVIsMkJBRW1CLEVBRm5CLDZCQUdtQixFQUhuQiwyQkFJaUIsSUFKakI7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLGdCQUFULEdBQTJCO0FBQ3pCLE1BQUksS0FBSyxJQUFJLEdBQUosRUFBVDtBQUNBLE1BQUksS0FBSyxJQUFJLEdBQUosRUFBVDtBQUNBLE1BQUksTUFBTSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLEVBQW1CLENBQW5CLEVBQXFCLENBQXJCLENBQVY7QUFDRSxPQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLEtBQUssR0FBckIsRUFBMEIsR0FBMUIsRUFBOEI7QUFDNUIsUUFBSSxTQUFXLEdBQUcsSUFBSCxLQUFZLEdBQUcsSUFBSCxFQUEzQjtBQUNBLFFBQUssU0FBTyxDQUFaO0FBQ0Y7QUFDRCxTQUFPLEdBQVA7QUFDRjs7QUFFRCxRQUFRLEdBQVIsQ0FBWSxvQkFBWixFQUFrQyxrQkFBbEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZnVuY3Rpb24gQ2FyZCAodmFsLCBzdWl0KSB7XG4gIHRoaXMudmFsID0gdmFsO1xuICB0aGlzLnN1aXQgPSBzdWl0O1xufVxuLy8gZ2VuZXJhdGUgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gMSBhbmQgNFxuLy8gaWYgaXQncyBldmVuLCB0aGUgc3VpdCBpcyBibGFjay4gaWYgb2RkLCBpdCdzIHJlZC5cbi8vIG1ha2UgYmluYXJ5IGNob2ljZSBiZXR3ZWVuIHJlZFswXSBhbmQgcmVkWzFdIChzYW1lIHdpdGggYmxhY2spXG4vLyB1c2UgTWF0aC5yYW5kb20gdG8gcGljayBhIG51bWJlciBiZXR3ZWVuIDEgYW5kIDAgdG8gdXNlIGFzIGluZGV4XG5mdW5jdGlvbiBwaWNrU3VpdCgpe1xuICBsZXQgcmVkID0gWydoZWFydHMnLCAnZGlhbW9uZHMnXVxuICBsZXQgYmxhY2sgPSBbJ3NwYWRlcycsICdjbHVicyddXG4gIGxldCBzdWl0ID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqNClcbiAgcmV0dXJuIChzdWl0ICUgMiA9PT0gMCkgP1xuICAgICAgYmxhY2tbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKV0gOlxuICAgICAgcmVkW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldXG59XG5cbi8vIHBpY2sgdmFsdWUgYnkgZ2VuZXJhdGluZyBhIHJhbmRvbSBudW1iZXIgMS0xM1xuLy8gY29uZGl0aW9uYWwgbG9naWMgdG8gZGVmaW5lIHRoZSBmYWNlIGNhcmRzLlxuZnVuY3Rpb24gcGlja1ZhbCgpe1xuICBsZXQgdmFsID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqMTMpXG4gIGlmICh2YWwgPT09IDExKXtcbiAgICB2YWwgPSBcIkphY2tcIlxuICB9ZWxzZSBpZiAodmFsID09PSAxMil7XG4gICAgdmFsID0gXCJRdWVlblwiXG4gIH1lbHNlIGlmICh2YWwgPT09IDEzKXtcbiAgICB2YWwgPSBcIktpbmdcIlxuICB9ZWxzZSBpZiAodmFsID09PSAxKXtcbiAgICB2YWwgPSBcIkFjZVwiXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuLy8gY29uc29sZS5sb2coIHBpY2tWYWwoKSApO1xuLy8gY29uc29sZS5sb2coIHBpY2tTdWl0KCkgKTtcbi8vIHlheSwgdGhlc2Ugd29yayFcblxuLy8gdXNlIHRoZXNlIHR3byBmdW5jdGlvbnMgdG8gZGV0ZXJtaW5lIGEgc3VpdCBhbmQgdmFsdWVcbi8vIHdpdGggYSB0ZXJuYXJ5IGNvbmRpdGlvbmFsIGZvciBncmFtbWFyXG5cbmZ1bmN0aW9uIGRyYXdDYXJkKCl7XG4gIGxldCB2YWwgPSBwaWNrVmFsKClcbiAgbGV0IHN1aXQgPSBwaWNrU3VpdCgpXG4gIHJldHVybiAodmFsID09PSBcIkFjZVwiIHx8IHZhbCA9PT0gOCApID9cbiAgYFlvdSBkcmV3IGFuICR7dmFsfSBvZiAke3N1aXR9YCA6IFxuICBgWW91IGRyZXcgYSAke3ZhbH0gb2YgJHtzdWl0fWBcbn1cblxuY29uc29sZS5sb2coIGRyYXdDYXJkKCkgKTtcblxuLy9cbmZ1bmN0aW9uIERpZSh2YWx1ZSl7XG4gIGxldCBzZWxmID0gdGhpcztcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB0aGlzLnJvbGwgPSBmdW5jdGlvbigpe1xuICAgIHNlbGYudmFsdWUgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSo2KVxuICAgIHJldHVybiBzZWxmLnZhbHVlXG4gIH1cbn1cbi8vXG5cbmxldCBkMSA9IG5ldyBEaWUoKVxubGV0IGQyID0gbmV3IERpZSgpXG5sZXQgcjEgPSBkMS5yb2xsKClcbmxldCByMiA9IGQyLnJvbGwoKVxubGV0IHBsYXkgPSByMSArIHIyXG5cbmNvbnNvbGUubG9nKCBgXG5cbiAgRGllIDEgcm9sbGVkIGEgJHtyMX0uIFxuICBEaWUgMiByb2xsZWQgYSAke3IyfS4gXG4gIFlvdSByb2xsZWQgYSAke3BsYXl9LlxuXG5gICk7XG4vLyBpbml0aWF0ZSBhbiBhcnIubGVuZ3RoID09PSAxMSwgc2V0IGVhY2ggaW5kZXggdG8gMC5cbi8vIGZvci1sb29wIHNldCB0byBpdGVyYXRlIDEwMDAgdGltZXNcbi8vIG9uIGVhY2ggaXRlcmF0aW9uIGxldCByZXN1bHQgZXF1YWwgdGhlIHN1bSBvZiBib3RoIGRpY2Vcbi8vIHNpbmNlIGluZGV4IDAgaXMgMiwgMSBpcyAzLCBldGMuLi5bcmVzdWx0IC0gMl0gaW5jcmVtZW50IHRhbGx5XG5cbmZ1bmN0aW9uIGdldFByb2JhYmlsaXRpZXMoKXtcbiAgbGV0IGQxID0gbmV3IERpZSgpO1xuICBsZXQgZDIgPSBuZXcgRGllKCk7XG4gIHZhciBhcnIgPSBbMCwwLDAsMCwwLDAsMCwwLDAsMCwwXTtcbiAgICBmb3IoIHZhciBpID0gMDsgaSA8PSA5OTk7IGkrKyl7XG4gICAgICBsZXQgcmVzdWx0ID0gKCBkMS5yb2xsKCkgKyBkMi5yb2xsKCkgKVxuICAgICAgYXJyWyhyZXN1bHQtMildKysgICBcbiAgIH1cbiAgIHJldHVybiBhcnI7XG59XG5cbmNvbnNvbGUubG9nKCdnZXRQcm9iYWJpbGl0aWVzOiAnLCBnZXRQcm9iYWJpbGl0aWVzKCkgKTtcbiJdfQ==
