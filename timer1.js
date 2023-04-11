'use strict';

const beep = () => process.stdout.write('\x07');
const args = process.argv.slice(2);
args.sort((a, b) => a - b); // ascending order

for (let input of args) {

  input = Number(input);
  let time = input * 1000;

  setTimeout(() => {
    beep();
  }, time);
}