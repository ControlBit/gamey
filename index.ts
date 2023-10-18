import { Dice } from '@signbit/dice';

const dice = new Dice({
  sides: 20,
});

console.log('dice::roll', dice.roll());
