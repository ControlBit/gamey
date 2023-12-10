'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

import { Drawer } from '@signbit/ui-components/src/components/containers/drawer';

import styles from './header.module.scss';

const Header = () => {
  const [activeItem, setActiveItem] = useState<null | string>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/') {
      setActiveItem('home');
      return;
    }

    setActiveItem(pathname.replace('/', ''));
  }, [pathname]);

  return (
    <header className={styles.Header}>
      <Drawer activeItem={activeItem} closeOnClick>
        <Drawer.Item id='home' onClick={() => router.push('/')}>
          Home
        </Drawer.Item>
        <Drawer.Item
          id='love-letter'
          onClick={() => router.push('/love-letter')}
        >
          Love Letter
        </Drawer.Item>
      </Drawer>
    </header>
  );
};

export { Header };
