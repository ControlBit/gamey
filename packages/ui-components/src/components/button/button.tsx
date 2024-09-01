import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { PIXEL_VALUE } from '../../constants';

import { calculatePixelValues as c } from '../../helpers/calculate-pixel-values';

import { Card } from '../card';

import './button.scss';

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'special';
}

const Button = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
}: ButtonProps) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (parentRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        const { width, height } =
          parentRef.current?.getBoundingClientRect() || { width: 0, height: 0 };

        setWidth(width);
        setHeight(height);
      });

      resizeObserver.observe(parentRef.current);
      return () => resizeObserver.disconnect(); // clean up
    }
  }, [setWidth, setHeight]);

  return (
    <div
      ref={parentRef}
      className={clsx(
        'Button',
        disabled ? 'Button--disabled' : `Button--${variant}`
      )}
      onClick={() => !disabled && onClick?.()}
      aria-disabled={disabled}
      role='button'
      tabIndex={0}
    >
      <Card>
        <svg
          className='Button__TopBorder'
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            y={c(PIXEL_VALUE * 2)}
            width={PIXEL_VALUE}
            height={c(height - PIXEL_VALUE * 6)}
          />
          <rect
            x={PIXEL_VALUE}
            y={PIXEL_VALUE}
            width={PIXEL_VALUE}
            height={PIXEL_VALUE}
          />
          <rect
            x={c(PIXEL_VALUE * 2)}
            width={c(width - PIXEL_VALUE * 6)}
            height={PIXEL_VALUE}
          />
        </svg>

        <div className='Button__Content'>{children}</div>

        <svg
          className='Button__BottomBorder'
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x={c(PIXEL_VALUE * 4)}
            y={c(height - PIXEL_VALUE)}
            width={c(width - PIXEL_VALUE * 6)}
            height={PIXEL_VALUE}
          />
          <rect
            y={c(height - PIXEL_VALUE * 2)}
            x={c(width - PIXEL_VALUE * 2)}
            width={PIXEL_VALUE}
            height={PIXEL_VALUE}
          />
          <rect
            y={c(PIXEL_VALUE * 4)}
            x={c(width - PIXEL_VALUE * 1)}
            width={PIXEL_VALUE}
            height={c(height - PIXEL_VALUE * 6)}
          />
        </svg>
      </Card>
    </div>
  );
};

export type { ButtonProps };
export { Button };
