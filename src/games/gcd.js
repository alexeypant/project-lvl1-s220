import {getRoundRandomNumber} from '..';


export const game = {
	title: 'Welcome to the Brain Games: GCD',
	task: 'Find the greatest common divisor of given numbers.',
	player: 'noname',
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