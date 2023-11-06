import { DiceRoller } from './components/DiceRoller';

export default function Home() {
  return (
    <main className='min-h-screen min-w-screen flex flex-col items-center'>
      <h1 className='text-black m-8 text-2xl'>Gamey</h1>

      <DiceRoller />
    </main>
  );
}
