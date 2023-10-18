import { describe, expect, it } from 'vitest';

import Dice from './';

describe('Dice', () => {
  it('should create a dice with default configuration', () => {
    const dice = new Dice();
    expect(dice.config.sides).toBe(6);
  });

  it('should create a dice with custom configuration', () => {
    const dice = new Dice({ sides: 10 });
    expect(dice.config.sides).toBe(10);
  });

  // standard TTRPG dice array
  it.each([4, 6, 8, 10, 12, 20])(
    'should roll a %i-sided dice 1000 times and verify that all rolls are within the range of the number of sides',
    numSides => {
      const dice = new Dice({ sides: numSides });
      const rolls: number[] = [];

      for (let i = 0; i < 1000; i++) {
        rolls.push(dice.roll());
      }

      expect(rolls.every(roll => roll <= numSides)).toBe(true);
    }
  );
});
