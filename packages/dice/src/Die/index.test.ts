import { describe, expect, it } from 'vitest';

import Die from '.';

describe('Die', () => {
  it('should create a die with default configuration', () => {
    const die = new Die();
    expect(die.config.sides).toBe(6);
  });

  it('should create a die with custom configuration', () => {
    const die = new Die({ sides: 10 });
    expect(die.config.sides).toBe(10);
  });

  // standard TTRPG die array
  it.each([4, 6, 8, 10, 12, 20])(
    'should roll a %i-sided die 1000 times and verify that all rolls are within the range of the number of sides',
    numSides => {
      const die = new Die({ sides: numSides });
      const rolls: number[] = [];

      for (let i = 0; i < 1000; i++) {
        rolls.push(die.roll());
      }

      expect(rolls.every(roll => roll <= numSides)).toBe(true);
    }
  );
});
