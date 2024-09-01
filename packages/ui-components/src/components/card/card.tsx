import { useEffect, useRef, useState } from 'react';

import { PIXEL_VALUE } from '../../constants';

import { calculatePixelValues as c } from '../../helpers/calculate-pixel-values';

import './card.scss';

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
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
    <div ref={parentRef} className='Card'>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='Card__Background'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d={`
            M ${c(PIXEL_VALUE * 2)} 0
            H ${c(width - PIXEL_VALUE * 2)}
            V ${PIXEL_VALUE}
            H ${c(width - PIXEL_VALUE)}
            V ${c(PIXEL_VALUE * 2)}
            H ${width}
            V ${c(height - PIXEL_VALUE * 2)}
            H ${c(width - PIXEL_VALUE)}
            V ${c(height - PIXEL_VALUE)}
            H ${c(width - PIXEL_VALUE * 2)}
            V ${height}
            H ${c(PIXEL_VALUE * 2)}
            V ${c(height - PIXEL_VALUE)}
            H ${PIXEL_VALUE}
            V ${c(height - PIXEL_VALUE * 2)}
            H 0
            V ${c(PIXEL_VALUE * 2)}
            H ${PIXEL_VALUE}
            V ${PIXEL_VALUE}
            H ${c(PIXEL_VALUE * 2)}
            V 0
            Z
          `}
        />
      </svg>
      <div className='Card__Content'>{children}</div>
    </div>
  );
};

export type { CardProps };
export { Card };
