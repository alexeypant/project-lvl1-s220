// I need to add logic description here
import readlineSync from 'readline-sync';
import { cons, car, cdr, toString } from 'hexlet-pairs';

const getResponseAndShow = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`'Hello, ${userName}!'`);
  return userName;
};

const getGuess = () => {
  const guess = readlineSync.question('Your answer: ');
  return guess;
};

const checkAnswer = (guess, correctAnswer) => {
  if (guess !== String(correctAnswer)) {
    console.log(`'${guess}'' was wrong answer ;(. Correct answer was  '${correctAnswer}'`);
    return false;
  }
  console.log('Correct!');
  return true;
};

export const sortArray = (A) => {
  const n = A.length;
  for(let i = 0; i < n; i++) {
    let v = A[i];
    let j = i - 1;
    while (j >= 0 && A[j] > v) {
      A[j+1] = A[j];
      j -= 1;
    }
  }
  return A;
}

export const runGame = (game, message) => {
  console.log(message);
  console.log(`${game.task}`);
  const playerName = getResponseAndShow(); // getting the name, saying hello and show the name
  let quiz;
  let guess;
  let isCorrect;
  let i = 0;
  while (i < 3) {
    quiz = game.function();
    console.log(`Question: ${car(quiz)}`);
    guess = getGuess();
    isCorrect = checkAnswer(guess, cdr(quiz));
    if (!isCorrect) {
      break;
    }
    if (i === 2) {
      console.log(`Congratulations ${playerName}!`);
      break;
    }
    i += 1;
  }
};

export const getRoundRandomNumber = () => Math.round(Math.random() * 100);
