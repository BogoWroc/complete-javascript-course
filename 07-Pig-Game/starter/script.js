'use strict';

const fieldScorePlayer0 = document.querySelector('#score--0');
const fieldCurrentScorePlayer0 = document.querySelector('#current--0');

const fieldScorePlayer1 = document.querySelector('#score--1');
const fieldCurrentScorePlayer1 = document.querySelector('#current--1');

const sectionPlayer0 = document.querySelector('.player--0');
const sectionPlayer1 = document.querySelector('.player--1');

const btnNewGame = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

const fieldDice = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');

let scorePlayerValue = 0;
let currentScorePlayerValue = 0;
let fieldActiveScorePlayer = fieldScorePlayer0;
let fieldActiveCurrentScorePlayer = fieldCurrentScorePlayer0;
let sectionActive = sectionPlayer0;

const roll = () => Math.trunc(Math.random() * 6) + 1;

const displayScores = (fieldScore, fieldCurrentScore) => {
  fieldScore.textContent = scorePlayerValue;
  fieldCurrentScore.textContent = currentScorePlayerValue;
};

const displayDice = value => {
  fieldDice.src = `dice-${value}.png`;
};

const newGameAction = () => {
  fieldDice.classList.add('hidden');
  scorePlayerValue = 0;
  currentScorePlayerValue = 0;
  fieldActiveScorePlayer = fieldScorePlayer0;
  fieldActiveCurrentScorePlayer = fieldCurrentScorePlayer0;
  sectionActive.classList.remove('player--winner');

  btnHold.disabled = false;
  btnRollDice.disabled = false;

  displayScores(fieldScorePlayer0, fieldCurrentScorePlayer0);
  displayScores(fieldScorePlayer1, fieldCurrentScorePlayer1);
};

const switchActiveUser = (
  sectionPlayer,
  fieldScorePlayer,
  fieldCurrentScorePlayer
) => {
  if (sectionPlayer.classList.contains('player--active')) {
    sectionPlayer.classList.remove('player--active');
  } else {
    sectionPlayer.classList.add('player--active');
    sectionActive = sectionPlayer;
    fieldActiveScorePlayer = fieldScorePlayer;
    fieldActiveCurrentScorePlayer = fieldCurrentScorePlayer;
    scorePlayerValue = new Number(fieldActiveScorePlayer.textContent);
    currentScorePlayerValue = new Number(
      fieldActiveCurrentScorePlayer.textContent
    );
  }
};
const markCurrentUserAsWinner = () => {
  sectionActive.classList.add('player--winner');
  btnHold.disabled = true;
  btnRollDice.disabled = true;
  alert('You won!');
};

const switchUserAction = () => {
  switchActiveUser(sectionPlayer0, fieldScorePlayer0, fieldCurrentScorePlayer0);
  switchActiveUser(sectionPlayer1, fieldScorePlayer1, fieldCurrentScorePlayer1);
  displayScores(fieldActiveScorePlayer, fieldActiveCurrentScorePlayer);
};

const cumulateResultAction = () => {
  scorePlayerValue += currentScorePlayerValue;
  currentScorePlayerValue = 0;
  displayScores(fieldActiveScorePlayer, fieldActiveCurrentScorePlayer);
};

const rollDiceAction = () => {
  fieldDice.classList.remove('hidden');
  const value = roll();
  displayDice(value);
  if (value === 1) {
    currentScorePlayerValue = 0;
    displayScores(fieldActiveScorePlayer, fieldActiveCurrentScorePlayer);
    switchUserAction();
  } else {
    currentScorePlayerValue += value;
    displayScores(fieldActiveScorePlayer, fieldActiveCurrentScorePlayer);
    if (currentScorePlayerValue + scorePlayerValue >= 100) {
      cumulateResultAction();
      markCurrentUserAsWinner();
    }
  }
};

const holdAction = () => {
  cumulateResultAction();
  switchUserAction();
};

btnNewGame.addEventListener('click', newGameAction);
btnRollDice.addEventListener('click', rollDiceAction);
btnHold.addEventListener('click', holdAction);
