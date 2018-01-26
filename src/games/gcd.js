import { runGame } from '..';
import { cons, car, cdr, toString } from 'hexlet-pairs';

const startGame = () => {
  const game = {
    task: 'Find the greatest common divisor of given numbers.',
    function: () => {
      let a = 0;
      let b = 0;
      let question;
      let correctAnswer;
      while (a === 0 || b === 0) {
        a = Math.round(Math.random() * 100);
        b = Math.round(Math.random() * 100);
      }
      question = (`${a} and ${b}`);
      while (a !== 0 && b !== 0) {
        if (a >= b) {
          a %= b;
        } else {
          b %= a;
        }
      }
      correctAnswer = (a + b);
      return cons(question,correctAnswer);
    },
  };

  const message = 'Welcome to the Brain Games: GCD';

  runGame(game, message);
};
export default startGame;
