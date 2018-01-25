import {getRoundRandomNumber} from '..';


export const game = {
	title: 'Welcome to the Brain Games: Calc',
	task: 'What is the result of the expression?',
	player: 'noname',
	function: () => {
		const randNumFirst = getRoundRandomNumber();
		const randNumSecond = getRoundRandomNumber(); 
		let correctAnswer;
		const oper = Math.round(Math.random()*2);
		switch(oper){
			case 0: console.log(`'Question: ${randNumFirst} + ${randNumSecond}'`);
					correctAnswer = randNumFirst + randNumSecond;
					break;

			case 1: console.log(`'Question: ${randNumFirst} * ${randNumSecond}'`);
					correctAnswer = randNumFirst * randNumSecond;
					break;

			case 2: console.log(`'Question: ${randNumFirst} - ${randNumSecond}'`);
					correctAnswer = randNumFirst - randNumSecond;
					break;		
		}
		return String(correctAnswer);
	}
}