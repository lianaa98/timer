const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const beep = () => process.stdout.write('\x07');

rl.setPrompt("Mini timer \nPress b to beep, or set a time before it beeps. \n (To exit timer, use ctrl + c.) \n")
rl.prompt();

rl.on('line', (line) => {
  if (line === 'b') {
    beep();
  }

  if ((Number(line) >= 1 || Number(line) <= 9)) {
    setTimeout(beep, Number(line) * 1000);
    console.log(`setting timer for ${line} seconds...`);
  }
})

rl.on('close', () => {
  console.log("Thanks for using me, ciao!");
})