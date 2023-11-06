import { joinClassNames } from '../../../helpers/joinClassNames';

import styles from './index.module.scss';

interface ButtonProps {
  className?: string;

  variant?: 'primary' | 'secondary' | 'danger';

  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  className,

  variant = 'primary',

  children,
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      onClick={() => {
        if (typeof onClick === 'function') {
          onClick();
        }
      }}
      className={joinClassNames(
        styles.Button,
        styles[`Button--${variant}`],
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export type { ButtonProps };
export { Button };
