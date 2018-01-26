import { cons } from 'hexlet-pairs';
import { runGame } from '..';

const isPrime = (num) => {
  for (let i = 2; i < num - 1; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
    return 'yes';
  }
  const start = Math.round(Math.random() * 10);
  const step = Math.round(Math.random() * 5);
  const array = [];
  array[0] = start;
  for (let i = 1; i < 10; i += 1) {
    array[i] = array[i - 1] + step;
  }
  return array;
};

const startGame = () => {
  const game = {
    task: 'Is this number prime?',
    function: () => {
      const number = Math.round(Math.random() * 30) + 2;
      const correctAnswer = isPrime(number);
      const question = (`${number}`);
      return cons(question, correctAnswer);
    },
  };

  const message = 'Welcome to the Brain Games: Progression';

  runGame(game, message);
};

export default startGame;
