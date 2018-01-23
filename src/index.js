// I need to add logic description here

import readlineSync from 'readline-sync';

// Wait for user's response

const getResponseAndShow = () => {
	const userName = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${userName} !'`);

	;
}

export default getResponseAndShow;