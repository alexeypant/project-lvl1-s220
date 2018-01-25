import {getRoundRandomNumber, runGame} from '..';


export const startGame = () => {

	const game = {
		task: 'Find the greatest common divisor of given numbers.',
		function: () => {
			let a = getRoundRandomNumber();
			let b = getRoundRandomNumber(); 
			while(a === 0 || b ===0){
				a = getRoundRandomNumber();
				b = getRoundRandomNumber();
			}
			console.log(`'Question: ${a} and ${b}'`);
			while(a !== 0 && b !==0){
				if(a >= b){
					a = a % b;
				}
				else {
					b = b % a;
				}
			}
			return String(a+b);
		}
	}

	const message = 'Welcome to the Brain Games: GCD';

	runGame(game, message);

}