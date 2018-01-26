import { cons } from 'hexlet-pairs';
import { runGame } from '..';


const startGame = () => {
  const game = {
    task: 'What is the result of the expression?',
    function: () => {
      const randNumFirst = Math.round(Math.random() * 10);
      const randNumSecond = Math.round(Math.random() * 10);
      let question;
      let correctAnswer;
      const oper = Math.round(Math.random() * 2);
      switch (oper) {
        case 0: question = (`${randNumFirst} + ${randNumSecond}`);
          correctAnswer = randNumFirst + randNumSecond;
          return cons(question, correctAnswer);
        case 1: question = (`${randNumFirst} * ${randNumSecond}`);
          correctAnswer = randNumFirst * randNumSecond;
          return cons(question, correctAnswer);
        case 2: question = (`${randNumFirst} - ${randNumSecond}`);
          correctAnswer = randNumFirst - randNumSecond;
          return cons(question, correctAnswer);
        default:
          break;
      }
      return null;
    },
  };
  const message = 'Welcome to the Brain Games: Calc';
  runGame(game, message);
};
export default startGame;
