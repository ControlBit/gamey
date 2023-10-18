import { DiceRoller } from './components/DiceRoller';

export default function Home() {
  return (
    <main className='min-h-screen min-w-screen bg-slate-100 flex flex-col items-center border-4 border-solid border-red-700'>
      <h1 className='text-lg text-black'>Gamey</h1>

      <DiceRoller />
    </main>
  );
}
