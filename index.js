// Code your solutions in this file

// for ([initialization]; [condition]; [iteration]) {
  // [loop body]
function printBadges(names){
  for (let i=0; i < names.length; i++){
    console.log(`Welcome ${names[i]}! You are employee #${i +1}.`);
  }
  return names;
};


// while ([condition]) {
  // [loop body]
// }
function tailsNeverFails(){
  tails = 0;
  while (Math.random() >= 0.5){
    tails++;
  }
  return `You got ${tails} tails in a row!`
};


// function maybeTrue() {
//     return Math.random() >= 0.5;
// }
//
// while (maybeTrue()) {
//     console.log('And I ran... I ran so far away!');
// }
