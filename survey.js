const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});

rl.question("What's your name? Nicknames are also acceptable :)" , (NicknamesAnswer) => {
  console.log(`Thank you for your valuable feedback: ${NicknamesAnswer}`);

  rl.close();
});

rl.question("What's an activity you like doing?" , (activityAnswer) => {
  console.log(`Thank you for your valuable feedback: ${activityAnswer}`);

  rl.close();
});

rl.question("What do you listen to while doing that?" , (listenAnswer) => {
  console.log(`Thank you for your valuable feedback: ${listenAnswer}`);

  rl.close();
});

