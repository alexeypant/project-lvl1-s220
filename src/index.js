// I need to add logic description here

import readlineSync from 'readline-sync';


// Wait for user's response

export const getResponseAndShow = () => {
	const userName = readlineSync.question('May I have your name? ') 
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
