// Code your solutions in this file
function printBadges(names) {
  for (let n = 0; n < names.length; n++) {
    console.log(`Welcome ${names[n]}! You are employee #${n + 1}.`);
  }
  return names;
}

function tailsNeverFails () {
  let number = 0;

  while (Math.random() >= 0.5) {
    number++;
  }
  return `You got ${number} tails in a row!`;
}
