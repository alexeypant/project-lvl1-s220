import { getRoundRandomNumber, runGame } from '..';

const startGame = () => {
  const game = {
    task: 'Answer "yes" if number even otherwise answer "no".',
    function: () => {
      const randNum = getRoundRandomNumber();
      const answer = (randNum % 2 === 0) ? 'yes' : 'no';
      console.log(`'Question: ${randNum}'`);
      return String(answer);
    },
  };
  const message = 'Welcome to the Brain Games: Even';
  runGame(game, message);
};
export default startGame;
