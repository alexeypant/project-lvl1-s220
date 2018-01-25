import { getRoundRandomNumber, runGame } from '..';

const startGame = () => {
  const game = {
    task: 'What is the result of the expression?',
    function: () => {
      const randNumFirst = getRoundRandomNumber();
      const randNumSecond = getRoundRandomNumber();
      let correctAnswer;
      const oper = Math.round(Math.random() * 2);
      switch (oper) {
        case 0: console.log(`'Question: ${randNumFirst} + ${randNumSecond}'`);
          correctAnswer = randNumFirst + randNumSecond;
          break;
        case 1: console.log(`'Question: ${randNumFirst} * ${randNumSecond}'`);
          correctAnswer = randNumFirst * randNumSecond;
          break;
        default: console.log(`'Question: ${randNumFirst} - ${randNumSecond}'`);
          correctAnswer = randNumFirst - randNumSecond;
          break;
      }
      return String(correctAnswer);
    },
  };
  const message = 'Welcome to the Brain Games: Calc';
  runGame(game, message);
};
export default startGame;
