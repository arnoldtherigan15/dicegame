var randomNumber1= Math.floor(Math.random() * (7 - 1) + 1);
var randomNumber2 = Math.floor(Math.random() * (7 - 1) + 1);
for (var i = 1; i < 7; i++) {
    if (i === randomNumber1) {
        document.querySelector('.img1').setAttribute('src',`images/dice${i}.png`);
    }
}
for (var i = 1; i < 7; i++) {
    if (i === randomNumber2) {
        document.querySelector('.img2').setAttribute('src',`images/dice${i}.png`);
    }
}

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').textContent='Player 1 Wins!';
} else if (randomNumber1 < randomNumber2) {
    document.querySelector('h1').textContent='Player 2 Wins!';
} else {
    document.querySelector('h1').textContent='DRAW!';
}

  