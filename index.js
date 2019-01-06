// Code your solutions in this file
const employeeName = ['Ada', 'Brendan', 'Ali']
function printBadges(employeeName){
	for (let i = 0; i < employeeName.length; i++){
		console.log(`Welcome ${employeeName[i]}! You are employee #${i + 1}.`)
	}
	return employeeName;
}

function tailsNeverFails(){
	let tails = 0;

	while (Math.random() >= 0.5){
		tails++
	}
	return `You got ${tails} tails in a row!`;
}