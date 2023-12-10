'use client';

import { useState, useCallback, useMemo } from 'react';
import { Die } from '@signbit/dice';

import { Button } from '@signbit/ui-components/src/components/button';

import styles from './DiceRoller.module.scss';

const DiceRoller = () => {
  const die = useMemo(
    () =>
      new Die({
        sides: 20,
      }),
    []
  );

  const [currentRoll, setCurrentRoll] = useState<number | null>(null);

  const roll = useCallback(() => {
    setCurrentRoll(die.roll());
  }, [die, setCurrentRoll]);

  return (
    <section className={styles.DiceRoller}>
      <h1 className='text-lg'>Dice Roller</h1>

      <ResultText currentRoll={currentRoll} />

      <Button className={styles.RollButton} onClick={roll}>
        Roll Die
      </Button>
    </section>
  );
};

const ResultText = ({ currentRoll }: { currentRoll: number | null }) => {
  let currentRollColor = 'text-gray-700';

  if (currentRoll && currentRoll >= 18) {
    currentRollColor = 'text-red-700';
  }

  return (
    <span className='m-4 w-full text-center'>
      {currentRoll ? (
        <span className='w-full flex justify-center'>
          <p className='mr-1'>Current Result:</p>
          <p className={currentRollColor}>{currentRoll}</p>
        </span>
      ) : (
        <p>Roll the dice!</p>
      )}
    </span>
  );
};

export { DiceRoller };
