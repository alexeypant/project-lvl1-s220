import { cons } from 'hexlet-pairs';
import { runGame } from '..';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const startGame = () => {
  const game = {
    task: 'Is this number prime?',
    function: () => {
      const number = Math.round(Math.random() * 30) + 2;
      const correctAnswer = (isPrime(number)) ? 'yes' : 'no';
      const question = (`${number}`);
      return cons(question, correctAnswer);
    },
  };

  const message = 'Welcome to the Brain Games: Prime';

  runGame(game, message);
};

export default startGame;
