#!/usr/bin/env node

import {getResponseAndShow, getRoundRandomNumber, getGuess } from '..';


console.log('Welcome to the Brain Games');

console.log('Answer "yes" if number even otherwise answer "no".');

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
