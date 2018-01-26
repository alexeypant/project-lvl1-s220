// I need to add logic description here
import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

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
