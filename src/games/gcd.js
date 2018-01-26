import { cons } from 'hexlet-pairs';
import { runGame, getGCD } from '..';


const startGame = () => {
  const game = {
    task: 'Find the greatest common divisor of given numbers.',
    function: () => {
      let a = 0;
      let b = 0;
      while (a === 0 || b === 0) {
        a = Math.round(Math.random() * 100);
        b = Math.round(Math.random() * 100);
      }
      const question = (`${a} and ${b}`);
      const correctAnswer = getGCD(a, b);
      return cons(question, correctAnswer);
    },
  };

  const message = 'Welcome to the Brain Games: GCD';

  runGame(game, message);
};
export default startGame;
