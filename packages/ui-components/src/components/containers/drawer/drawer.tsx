import {
  Fragment,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Dialog, Transition } from '@headlessui/react';

import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';

import { joinClassNames } from '../../../helpers/joinClassNames';

import './drawer.scss';

interface DrawerProps {
  children?: React.ReactNode;
  className?: string;

  activeItem?: string | null;

  isOpen?: boolean;
  closeOnClick?: boolean;
}

interface DrawerContextProps {
  activeItem: null | string;
  setActiveItem: null | ((id: string) => void);
}

const DrawerContext = createContext<DrawerContextProps>({
  activeItem: null,
  setActiveItem: null,
});

const Drawer = ({
  children,
  className,

  activeItem: _activeItem = null,

  isOpen = false,
  closeOnClick = false,
}: DrawerProps) => {
  const [showOpen, setShowOpen] = useState(isOpen);
  const [activeItem, setActiveItem] =
    useState<DrawerContextProps['activeItem']>(_activeItem);

  useEffect(() => {
    setShowOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    setActiveItem(_activeItem);
  }, [_activeItem]);

  return (
    <section className={joinClassNames('Drawer', className)}>
      <DrawerContext.Provider
        value={{
          activeItem,
          setActiveItem: (id: string) => {
            setActiveItem(id);

            if (closeOnClick) {
              setShowOpen(false);
            }
          },
        }}
      >
        <Bars3BottomLeftIcon
          className={joinClassNames('Drawer__OpenIcon')}
          onClick={() => setShowOpen(true)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              setShowOpen(true);
            }
          }}
          tabIndex={0}
        />

        <Transition.Root show={showOpen} as={Fragment}>
          <Dialog
            as='div'
            className='relative z-50'
            onClose={() => setShowOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-gray/80' />
            </Transition.Child>

            <div className='fixed inset-0 flex'>
              <Transition.Child
                as={Fragment}
                enter='transition ease-in-out duration-300 transform'
                enterFrom='-translate-x-full'
                enterTo='translate-x-0'
                leave='transition ease-in-out duration-300 transform'
                leaveFrom='translate-x-0'
                leaveTo='-translate-x-full'
              >
                <aside className={joinClassNames('Drawer__Content')}>
                  <XMarkIcon
                    className={joinClassNames('Drawer__CloseIcon')}
                    onClick={() => setShowOpen(false)}
                    onKeyDown={e => {
                      if (e.key === 'Enter') {
                        setShowOpen(false);
                      }
                    }}
                    tabIndex={0}
                  />

                  <section className={joinClassNames('Drawer__ContentList')}>
                    {children}
                  </section>
                </aside>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </DrawerContext.Provider>
    </section>
  );
};

interface ItemProps {
  id: string;
  children?: React.ReactNode;
  className?: string;

  onClick?: (id: string) => void;
}

const Item = ({ id, children, className, onClick }: ItemProps) => {
  const drawerContext = useContext(DrawerContext);

  const isActive = drawerContext.activeItem === id;

  const handleClick = useCallback(() => {
    drawerContext.setActiveItem?.(id);

    onClick?.(id);
  }, [drawerContext, id]);

  return (
    <section
      onClick={() => handleClick()}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          handleClick();
        }
      }}
      className={joinClassNames(
        'DrawerItem',
        isActive && 'DrawerItem--active',
        className
      )}
      tabIndex={0}
    >
      {children}
    </section>
  );
};

Drawer.Item = Item;

export type { DrawerProps, ItemProps };
export { Drawer };
