import { cons } from 'hexlet-pairs';
import { runGame } from '..';

const generateProgression = () => {
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
    task: 'What number is missing in this progression?',
    function: () => {
      const array = generateProgression();
      const index = Math.round(Math.random() * 9);
      const correctAnswer = array[index];
      array[index] = '..';
      const question = (`${array.join(' ')}`);
      return cons(question, correctAnswer);
    },
  };

  const message = 'Welcome to the Brain Games: Progression';

  runGame(game, message);
};

export default startGame;
