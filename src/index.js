// I need to add logic description here

import readlineSync from 'readline-sync';


export const showWelcomeMessageEven = () => {
	console.log('Welcome to the Brain Games');
	console.log('Answer "yes" if number even otherwise answer "no".');
}


// Wait for user's response
export const getResponseAndShow = () => {
	const userName = readlineSync.question('May I have your name? ');

	console.log(`'Hello, ${userName}!'`);
	return userName;
}

export const getGuess = () => {
	const guess = readlineSync.question('Your answer: ');
	return guess;
}

//export default getResponseAndShow;

export const getRoundRandomNumber = () => {
	
	return Math.round(Math.random()*10);

}

export const startGameEven = () => {

showWelcomeMessageEven();

const playerName = getResponseAndShow();  // getting the name, saying hello and show the name


let randomNumber;
let guess;
let correctAnswers = 0;

for(let i = 0; i < 3; i++){

	randomNumber = getRoundRandomNumber();
	console.log(`Question: ${randomNumber}'`);
	guess = getGuess();
	if( (randomNumber%2 === 0 && guess === 'yes') || (randomNumber%2 !== 0 && guess === 'no') ) {
		correctAnswers++;
		console.log('Correct!');
		continue;
	}
	console.log(`${guess} was wrong answer ;(. Correct answer was  ${(guess === 'yes') ? 'no' : 'yes'}'`);
	break;
}
if (correctAnswers === 3) {
	console.log(`Congratulations ${playerName}!'`);
}
}
