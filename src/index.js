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

export const getGCD = (a, b) => {
  if (b === 0) {
    return (a < 0) ? -a : a;
  }
  return getGCD(b, a % b);
};
// might be this way
//  return (b === 0) ? (a < 0 ? - a : a) : getGCD(b, a % b);
//or that way
// while (a !== 0 && b !== 0) {
//   if (a >= b) {
//     a %= b;
//   } else {
//     b %= a;
//   }
// }
// return (a + b);


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
