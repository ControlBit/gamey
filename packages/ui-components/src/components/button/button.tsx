import { joinClassNames } from '../../helpers/joinClassNames';

import styles from './button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;

  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'large' | 'small';

  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  children,
  className,

  variant = 'primary',
  size = 'large',

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
        styles[`Button--${size}`],
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
