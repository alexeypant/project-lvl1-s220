import { cons } from 'hexlet-pairs';
import { runGame } from '..';

const startGame = () => {
  const game = {
    task: 'Answer "yes" if number even otherwise answer "no".',
    function: () => {
      const randNum = Math.round(Math.random() * 100);
      const question = `${randNum}`;
      const answer = (randNum % 2 === 0) ? 'yes' : 'no';
      return cons(question, answer);
    },
  };
  const message = 'Welcome to the Brain Games: Even';
  runGame(game, message);
};
export default startGame;
