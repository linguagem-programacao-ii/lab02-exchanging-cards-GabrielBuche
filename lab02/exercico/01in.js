
var cardA = getRandomInt()
var cardB = getRandomInt()
console.log("Alice tem: " + cardA + " cartas")
console.log("Betty tem: " + cardB + " cartas")
var X = [];
var Y = [];
var max = 10 ** 5;
var maxTroca = 0

function getRandomInt() {
  min = Math.ceil(1);
  max = Math.floor(10 ** 4);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < cardA; i++) {
  var temp = Math.floor(Math.random() * max);
  if (X.indexOf(temp) == -1) {
    X.push(temp);
  }
  else
    i--;
}

for (var i = 0; i < cardB; i++) {
  var temp = Math.floor(Math.random() * max);
  if (Y.indexOf(temp) == -1) {
    Y.push(temp);
  }
  else
    i--;
}

for(var i = 0; i < X.length; i++) {
  if(Y.indexOf(X[i]) == -1) {
    X.splice(i, 1);
      maxTroca++;
  }
}

console.log(maxTroca + " trocas possiveis :D")

// os inputs sao randomicos
// pois nao quis usar html