#!/usr/bin/env node

import {getResponseAndShow, getRoundRandomNumber, getGuess } from '..';


console.log('Welcome to the Brain Games');

console.log('What is the result of the expression?');

const playerName = getResponseAndShow();  // getting the name, saying hello and show the name


let randNumFirst;
let randNumSecond;
let resultOfOperation;
let guess;
let correctAnswers = 0;



for(let i = 0; i < 3; i++){
	randNumFirst = getRoundRandomNumber();
	randNumSecond = getRoundRandomNumber();

	// Sum is the first operation
	if (i === 0) {
		resultOfOperation = randNumFirst + randNumSecond;
		console.log(`Question: ${randNumFirst} + ${randNumSecond}'`);
		guess =  getGuess();

		if(resultOfOperation === parseInt(guess, 10)) {
			correctAnswers++;
			console.log('Correct!');
			continue;
		}
	}

		// Multiplication is the first operation
	if (i === 1) {
		resultOfOperation = randNumFirst * randNumSecond;
		console.log(`Question: ${randNumFirst} * ${randNumSecond}`);
		guess = getGuess();

		if(resultOfOperation === parseInt(guess, 10)) {
			correctAnswers++;
			console.log('Correct!');
			continue;
		}
	}

		// Multiplication is the first operation
	if (i === 2) {
		resultOfOperation = randNumFirst - randNumSecond;
		console.log(`Question: ${randNumFirst} - ${randNumSecond}`);
		guess = getGuess();

		if(resultOfOperation === parseInt(guess, 10)) {
			correctAnswers++;
			console.log('Correct!');
			continue;
		}
	}
	console.log(`${guess} was wrong answer ;(. Correct answer was  ${resultOfOperation}`);
	break;
}
if (correctAnswers === 3) {
	console.log(`Congratulations ${playerName}!`);
}
