import { DiceRoller } from './components/DiceRoller';

import { Button } from '@signbit/ui-components/src/components/button';

export default function Home() {
  return (
    <main className='min-h-screen min-w-screen flex flex-col items-center'>
      <h1 className='text-black m-8 text-2xl'>Love Letter</h1>

      <DiceRoller />
    </main>
  );
}
