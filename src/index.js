// I need to add logic description here
import readlineSync from 'readline-sync';

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
  if (correctAnswer !== guess) {
    console.log(`${guess} was wrong answer ;(. Correct answer was  ${correctAnswer}`);
    return false;
  }
  console.log('Correct!');
  return true;
};

export const runGame = (game, message) => {
  console.log(message);
  console.log(`${game.task}`);
  const playerName = getResponseAndShow(); // getting the name, saying hello and show the name
  let correctAnswer = 0;
  let guess;
  let isCorrect;
  let i = 0;
  while (i < 3) {
    correctAnswer = game.function();
    guess = getGuess();
    isCorrect = checkAnswer(guess, correctAnswer);
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
