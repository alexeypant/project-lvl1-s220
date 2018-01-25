// I need to add logic description here
import readlineSync from 'readline-sync';


export const runGame = (game,message) => {

	console.log(message);

	console.log(`${game.task}`);

	const playerName = getResponseAndShow(); // getting the name, saying hello and show the name
	
	let correctAnswer = 0;
	let guess;
	let isCorrect;
	let i = 0;

	while(i < 3){
		correctAnswer = game.function();  	// ask question, show it, return the correct answer
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


const getResponseAndShow = () => {
	const userName = readlineSync.question('May I have your name? ');

	console.log(`'Hello, ${userName}!'`);
	return userName;
}

const getGuess = () => {
	const guess = readlineSync.question('Your answer: ');
	return guess;
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

export const getRoundRandomNumber = () => {
	
	return Math.round(Math.random()*100);
}