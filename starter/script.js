'use strict';
// selecting element
const player0Ele = document.querySelector('.player--0');
const player1Ele = document.querySelector('.player--1');
const score0Ele = document.querySelector('#score--0');
const score1Ele = document.querySelector('#score--1');
const current0Ele = document.querySelector('#current--0');
const current1Ele = document.querySelector('#current--1');
const diceEle = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting condition
score0Ele.textContent = 0;
score1Ele.textContent = 0;
diceEle.classList.add('hidden');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
//rolling dice
btnRoll.addEventListener('click', function () {
  // generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // display dice
  diceEle.classList.remove('hidden');
  diceEle.src = ` dice-${dice}.png`;

  // check for the rolled 1
  if (dice !== 1) {
    //add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    //current0Ele.textContent = currentScore; //change later
  } else {
    //switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Ele.classList.toggle('Player--active');
    player1Ele.classList.toggle('Player--active');
  }
});
