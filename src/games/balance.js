import { getRoundRandomNumber, sortArray, runGame } from '..';

const startGame = () => {
  const game = {
    task: 'Balance the given number.',
    function: () => {
      let A = [];
      for (let i = 0; i < 3; i++) {
        A[i] = Math.round(Math.random() * 9);
      }
      const question = A.toString();
      console.log(`'Question: ${question}'`);
      A = sortArray(A);
      while ((A[2] - A[0]) > 1) {
        A[0] += 1;
        A[2] -= 1;
        A = sortArray(A);
      }
      const answer = A.toString();
      console.log(`'Answer: ${answer}'`);
      return question;
    },
  };

  const message = 'Welcome to the Brain Games: BALANCE';

  runGame(game, message);
};
export default startGame;
