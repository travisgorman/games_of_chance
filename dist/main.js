(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function Card(val, suit) {
  this.val = val;
  this.suit = suit;
}
function Hand() {}
Hand.prototype.c1 = new Card(pickVal(), pickSuit());
Hand.prototype.c2 = new Card(pickVal(), pickSuit());
Hand.prototype.c3 = new Card(pickVal(), pickSuit());
Hand.prototype.c4 = new Card(pickVal(), pickSuit());
Hand.prototype.c5 = new Card(pickVal(), pickSuit());

var hand = new Hand();

console.log(hand.c1, hand.c2, hand.c3, hand.c4, hand.c5);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsU0FBUyxJQUFULENBQWUsR0FBZixFQUFvQixJQUFwQixFQUEwQjtBQUN4QixPQUFLLEdBQUwsR0FBVyxHQUFYO0FBQ0EsT0FBSyxJQUFMLEdBQVksSUFBWjtBQUNEO0FBQ0QsU0FBUyxJQUFULEdBQWUsQ0FBRTtBQUNqQixLQUFLLFNBQUwsQ0FBZSxFQUFmLEdBQW9CLElBQUksSUFBSixDQUFVLFNBQVYsRUFBcUIsVUFBckIsQ0FBcEI7QUFDQSxLQUFLLFNBQUwsQ0FBZSxFQUFmLEdBQW9CLElBQUksSUFBSixDQUFVLFNBQVYsRUFBcUIsVUFBckIsQ0FBcEI7QUFDQSxLQUFLLFNBQUwsQ0FBZSxFQUFmLEdBQW9CLElBQUksSUFBSixDQUFVLFNBQVYsRUFBcUIsVUFBckIsQ0FBcEI7QUFDQSxLQUFLLFNBQUwsQ0FBZSxFQUFmLEdBQW9CLElBQUksSUFBSixDQUFVLFNBQVYsRUFBcUIsVUFBckIsQ0FBcEI7QUFDQSxLQUFLLFNBQUwsQ0FBZSxFQUFmLEdBQW9CLElBQUksSUFBSixDQUFVLFNBQVYsRUFBcUIsVUFBckIsQ0FBcEI7O0FBRUEsSUFBSSxPQUFPLElBQUksSUFBSixFQUFYOztBQUVBLFFBQVEsR0FBUixDQUFhLEtBQUssRUFBbEIsRUFBc0IsS0FBSyxFQUEzQixFQUErQixLQUFLLEVBQXBDLEVBQXdDLEtBQUssRUFBN0MsRUFBaUQsS0FBSyxFQUF0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsUUFBVCxHQUFtQjtBQUNqQixNQUFJLE1BQU0sQ0FBQyxRQUFELEVBQVcsVUFBWCxDQUFWO0FBQ0EsTUFBSSxRQUFRLENBQUMsUUFBRCxFQUFXLE9BQVgsQ0FBWjtBQUNBLE1BQUksT0FBTyxLQUFLLElBQUwsQ0FBVSxLQUFLLE1BQUwsS0FBYyxDQUF4QixDQUFYO0FBQ0EsU0FBUSxPQUFPLENBQVAsS0FBYSxDQUFkLEdBQ0gsTUFBTSxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsRUFBWCxDQUFOLENBREcsR0FFSCxJQUFJLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxFQUFYLENBQUosQ0FGSjtBQUdEOztBQUVEO0FBQ0E7QUFDQSxTQUFTLE9BQVQsR0FBa0I7QUFDaEIsTUFBSSxNQUFNLEtBQUssSUFBTCxDQUFVLEtBQUssTUFBTCxLQUFjLEVBQXhCLENBQVY7QUFDQSxNQUFJLFFBQVEsRUFBWixFQUFlO0FBQ2IsVUFBTSxNQUFOO0FBQ0QsR0FGRCxNQUVNLElBQUksUUFBUSxFQUFaLEVBQWU7QUFDbkIsVUFBTSxPQUFOO0FBQ0QsR0FGSyxNQUVBLElBQUksUUFBUSxFQUFaLEVBQWU7QUFDbkIsVUFBTSxNQUFOO0FBQ0QsR0FGSyxNQUVBLElBQUksUUFBUSxDQUFaLEVBQWM7QUFDbEIsVUFBTSxLQUFOO0FBQ0Q7QUFDRCxTQUFPLEdBQVA7QUFDRDtBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFNBQVMsUUFBVCxHQUFtQjtBQUNqQixNQUFJLE1BQU0sU0FBVjtBQUNBLE1BQUksT0FBTyxVQUFYO0FBQ0EsU0FBUSxRQUFRLEtBQVIsSUFBaUIsUUFBUSxDQUExQixvQkFDUSxHQURSLFlBQ2tCLElBRGxCLG1CQUVPLEdBRlAsWUFFaUIsSUFGeEI7QUFHRDs7QUFFRCxRQUFRLEdBQVIsQ0FBYSxVQUFiOztBQUVBO0FBQ0EsU0FBUyxHQUFULENBQWEsS0FBYixFQUFtQjtBQUNqQixNQUFJLE9BQU8sSUFBWDtBQUNBLE9BQUssS0FBTCxHQUFhLEtBQWI7QUFDQSxPQUFLLElBQUwsR0FBWSxZQUFVO0FBQ3BCLFNBQUssS0FBTCxHQUFhLEtBQUssSUFBTCxDQUFVLEtBQUssTUFBTCxLQUFjLENBQXhCLENBQWI7QUFDQSxXQUFPLEtBQUssS0FBWjtBQUNELEdBSEQ7QUFJRDtBQUNEOztBQUVBLElBQUksS0FBSyxJQUFJLEdBQUosRUFBVDtBQUNBLElBQUksS0FBSyxJQUFJLEdBQUosRUFBVDtBQUNBLElBQUksS0FBSyxHQUFHLElBQUgsRUFBVDtBQUNBLElBQUksS0FBSyxHQUFHLElBQUgsRUFBVDtBQUNBLElBQUksT0FBTyxLQUFLLEVBQWhCOztBQUVBLFFBQVEsR0FBUiwyQkFFbUIsRUFGbkIsNkJBR21CLEVBSG5CLDJCQUlpQixJQUpqQjtBQU9BO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsZ0JBQVQsR0FBMkI7QUFDekIsTUFBSSxLQUFLLElBQUksR0FBSixFQUFUO0FBQ0EsTUFBSSxLQUFLLElBQUksR0FBSixFQUFUO0FBQ0EsTUFBSSxNQUFNLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUIsQ0FBbkIsRUFBcUIsQ0FBckIsQ0FBVjtBQUNFLE9BQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsS0FBSyxHQUFyQixFQUEwQixHQUExQixFQUE4QjtBQUM1QixRQUFJLFNBQVcsR0FBRyxJQUFILEtBQVksR0FBRyxJQUFILEVBQTNCO0FBQ0EsUUFBSyxTQUFPLENBQVo7QUFDRjtBQUNELFNBQU8sR0FBUDtBQUNGOztBQUVELFFBQVEsR0FBUixDQUFZLG9CQUFaLEVBQWtDLGtCQUFsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJmdW5jdGlvbiBDYXJkICh2YWwsIHN1aXQpIHtcbiAgdGhpcy52YWwgPSB2YWxcbiAgdGhpcy5zdWl0ID0gc3VpdFxufVxuZnVuY3Rpb24gSGFuZCgpe31cbkhhbmQucHJvdG90eXBlLmMxID0gbmV3IENhcmQoIHBpY2tWYWwoKSwgcGlja1N1aXQoKSApXG5IYW5kLnByb3RvdHlwZS5jMiA9IG5ldyBDYXJkKCBwaWNrVmFsKCksIHBpY2tTdWl0KCkgKVxuSGFuZC5wcm90b3R5cGUuYzMgPSBuZXcgQ2FyZCggcGlja1ZhbCgpLCBwaWNrU3VpdCgpIClcbkhhbmQucHJvdG90eXBlLmM0ID0gbmV3IENhcmQoIHBpY2tWYWwoKSwgcGlja1N1aXQoKSApXG5IYW5kLnByb3RvdHlwZS5jNSA9IG5ldyBDYXJkKCBwaWNrVmFsKCksIHBpY2tTdWl0KCkgKVxuXG5sZXQgaGFuZCA9IG5ldyBIYW5kXG5cbmNvbnNvbGUubG9nKCBoYW5kLmMxLCBoYW5kLmMyLCBoYW5kLmMzLCBoYW5kLmM0LCBoYW5kLmM1ICk7XG5cbi8vIGdlbmVyYXRlIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIDEgYW5kIDRcbi8vIGlmIGl0J3MgZXZlbiwgdGhlIHN1aXQgaXMgYmxhY2suIGlmIG9kZCwgaXQncyByZWQuXG4vLyBtYWtlIGJpbmFyeSBjaG9pY2UgYmV0d2VlbiByZWRbMF0gYW5kIHJlZFsxXSAoc2FtZSB3aXRoIGJsYWNrKVxuLy8gdXNlIE1hdGgucmFuZG9tIHRvIHBpY2sgYSBudW1iZXIgYmV0d2VlbiAxIGFuZCAwIHRvIHVzZSBhcyBpbmRleFxuZnVuY3Rpb24gcGlja1N1aXQoKXtcbiAgbGV0IHJlZCA9IFsnaGVhcnRzJywgJ2RpYW1vbmRzJ11cbiAgbGV0IGJsYWNrID0gWydzcGFkZXMnLCAnY2x1YnMnXVxuICBsZXQgc3VpdCA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpKjQpXG4gIHJldHVybiAoc3VpdCAlIDIgPT09IDApID9cbiAgICAgIGJsYWNrW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSldIDpcbiAgICAgIHJlZFtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpXVxufVxuXG4vLyBwaWNrIHZhbHVlIGJ5IGdlbmVyYXRpbmcgYSByYW5kb20gbnVtYmVyIDEtMTNcbi8vIGNvbmRpdGlvbmFsIGxvZ2ljIHRvIGRlZmluZSB0aGUgZmFjZSBjYXJkcy5cbmZ1bmN0aW9uIHBpY2tWYWwoKXtcbiAgbGV0IHZhbCA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpKjEzKVxuICBpZiAodmFsID09PSAxMSl7XG4gICAgdmFsID0gXCJKYWNrXCJcbiAgfWVsc2UgaWYgKHZhbCA9PT0gMTIpe1xuICAgIHZhbCA9IFwiUXVlZW5cIlxuICB9ZWxzZSBpZiAodmFsID09PSAxMyl7XG4gICAgdmFsID0gXCJLaW5nXCJcbiAgfWVsc2UgaWYgKHZhbCA9PT0gMSl7XG4gICAgdmFsID0gXCJBY2VcIlxuICB9XG4gIHJldHVybiB2YWxcbn1cbi8vIGNvbnNvbGUubG9nKCBwaWNrVmFsKCkgKTtcbi8vIGNvbnNvbGUubG9nKCBwaWNrU3VpdCgpICk7XG4vLyB5YXksIHRoZXNlIHdvcmshXG5cbi8vIHVzZSB0aGVzZSB0d28gZnVuY3Rpb25zIHRvIGRldGVybWluZSBhIHN1aXQgYW5kIHZhbHVlXG4vLyB3aXRoIGEgdGVybmFyeSBjb25kaXRpb25hbCBmb3IgZ3JhbW1hclxuXG5mdW5jdGlvbiBkcmF3Q2FyZCgpe1xuICBsZXQgdmFsID0gcGlja1ZhbCgpXG4gIGxldCBzdWl0ID0gcGlja1N1aXQoKVxuICByZXR1cm4gKHZhbCA9PT0gXCJBY2VcIiB8fCB2YWwgPT09IDggKSA/XG4gIGBZb3UgZHJldyBhbiAke3ZhbH0gb2YgJHtzdWl0fWAgOiBcbiAgYFlvdSBkcmV3IGEgJHt2YWx9IG9mICR7c3VpdH1gXG59XG5cbmNvbnNvbGUubG9nKCBkcmF3Q2FyZCgpICk7XG5cbi8vXG5mdW5jdGlvbiBEaWUodmFsdWUpe1xuICBsZXQgc2VsZiA9IHRoaXM7XG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgdGhpcy5yb2xsID0gZnVuY3Rpb24oKXtcbiAgICBzZWxmLnZhbHVlID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkqNilcbiAgICByZXR1cm4gc2VsZi52YWx1ZVxuICB9XG59XG4vL1xuXG5sZXQgZDEgPSBuZXcgRGllKClcbmxldCBkMiA9IG5ldyBEaWUoKVxubGV0IHIxID0gZDEucm9sbCgpXG5sZXQgcjIgPSBkMi5yb2xsKClcbmxldCBwbGF5ID0gcjEgKyByMlxuXG5jb25zb2xlLmxvZyggYFxuXG4gIERpZSAxIHJvbGxlZCBhICR7cjF9LiBcbiAgRGllIDIgcm9sbGVkIGEgJHtyMn0uIFxuICBZb3Ugcm9sbGVkIGEgJHtwbGF5fS5cblxuYCApO1xuLy8gaW5pdGlhdGUgYW4gYXJyLmxlbmd0aCA9PT0gMTEsIHNldCBlYWNoIGluZGV4IHRvIDAuXG4vLyBmb3ItbG9vcCBzZXQgdG8gaXRlcmF0ZSAxMDAwIHRpbWVzXG4vLyBvbiBlYWNoIGl0ZXJhdGlvbiBsZXQgcmVzdWx0IGVxdWFsIHRoZSBzdW0gb2YgYm90aCBkaWNlXG4vLyBzaW5jZSBpbmRleCAwIGlzIDIsIDEgaXMgMywgZXRjLi4uW3Jlc3VsdCAtIDJdIGluY3JlbWVudCB0YWxseVxuXG5mdW5jdGlvbiBnZXRQcm9iYWJpbGl0aWVzKCl7XG4gIGxldCBkMSA9IG5ldyBEaWUoKTtcbiAgbGV0IGQyID0gbmV3IERpZSgpO1xuICB2YXIgYXJyID0gWzAsMCwwLDAsMCwwLDAsMCwwLDAsMF07XG4gICAgZm9yKCB2YXIgaSA9IDA7IGkgPD0gOTk5OyBpKyspe1xuICAgICAgbGV0IHJlc3VsdCA9ICggZDEucm9sbCgpICsgZDIucm9sbCgpIClcbiAgICAgIGFyclsocmVzdWx0LTIpXSsrICAgXG4gICB9XG4gICByZXR1cm4gYXJyO1xufVxuXG5jb25zb2xlLmxvZygnZ2V0UHJvYmFiaWxpdGllczogJywgZ2V0UHJvYmFiaWxpdGllcygpICk7XG4iXX0=
