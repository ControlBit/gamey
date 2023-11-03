import styles from './index.module.scss';

const Button = () => {
  return (
    <button className='bg-red-300 p-4 rounded-2xl'>
      <p className={styles.ButtonBase}>Button</p>
    </button>
  );
};

export { Button };
