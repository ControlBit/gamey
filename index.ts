import { Die } from '@signbit/dice';

const die = new Die({
  sides: 20,
});

console.log('die::roll', die.roll());
