// I need to add logic description here

import readlineSync from 'readline-sync';

export const startGameEven = () => {

	showWelcomeMessageEven();
	
	const playerName = getResponseAndShow();  // getting the name, saying hello and show the name
	let correctAnswer = 0;
	let guess;
	let isCorrect;
	let i = 0;

	while(i < 3){
		correctAnswer = generateNumberAndShow();  	// ask question, show it, return the correct answer
		guess =  getGuess();  							// get the user's guess
		isCorrect = checkAnswer(guess,correctAnswer);				// check the answer, show results, if wrong, quit, 
		if(!isCorrect) {
			break;
		}
		if(i === 2){
			console.log(`Congratulations ${playerName}!`);
			break;
		}
		i++;
	}
}


export const startGameCalc = () => {
	showWelcomeMessageCalc();
	const playerName = getResponseAndShow();  // getting the name, saying hello and show the name


	let correctAnswer;
	let guess;
	let isCorrect;
	let i = 0;
	while(i < 3){
		correctAnswer = generateExpressionAndShow(i);  	// ask question, show it, return the correct answer
		guess =  getGuess();  							// get the user's guess
		isCorrect = checkAnswer(guess,correctAnswer);				// check the answer, show results, if wrong, quit, 
		if(!isCorrect) {
			break;
		}
		if(i === 2){
			console.log(`Congratulations ${playerName}!`);
			break;
		}
		i++;
	}
}

const showWelcomeMessageEven = () => {
	console.log('Welcome to the Brain Games');
	console.log('Answer "yes" if number even otherwise answer "no".');
}


// Ask user name, get response  and say hello to him
const getResponseAndShow = () => {
	const userName = readlineSync.question('May I have your name? ');

	console.log(`'Hello, ${userName}!'`);
	return userName;
}

const getGuess = () => {
	const guess = readlineSync.question('Your answer: ');
	return guess;
}

const generateNumberAndShow = () => {

	const randNum = getRoundRandomNumber();
	const correctAnswer = (randNum%2 === 0) ? 'yes' : 'no';
	console.log(`'Question: ${randNum}'`);
	return String(correctAnswer);
}

const generateExpressionAndShow = (oper) => {

	const randNumFirst = getRoundRandomNumber();
	const randNumSecond = getRoundRandomNumber(); 
	let correctAnswer;

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

const showWelcomeMessageCalc = () => {
	console.log('Welcome to the Brain Games');
	console.log('What is the result of the expression?');
//	return;
}

const checkAnswer = (guess, correctAnswer) => {
	if(correctAnswer !== guess){
		console.log(`${guess} was wrong answer ;(. Correct answer was  ${correctAnswer}`);
		return false;
	}
	else {
		console.log('Correct!');
		return true;
	}
}

const getRoundRandomNumber = () => {
	
	return Math.round(Math.random()*10);
}