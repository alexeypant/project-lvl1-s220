import {getRoundRandomNumber} from '..';


export const game = {
	title: 'Welcome to the Brain Games: Even',
	task: 'Answer "yes" if number even otherwise answer "no".',
	player: 'noname',
	function: () => {
			const randNum = getRoundRandomNumber();
			const answer = (randNum%2 === 0) ? 'yes' : 'no';
			console.log(`'Question: ${randNum}'`);
			return String(answer);
	}
}