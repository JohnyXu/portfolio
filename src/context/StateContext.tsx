import React, { createContext, useContext, useState, PropsWithChildren } from 'react';

interface IState {
  menuOpen: boolean;
  open: () => void;
  close: () => void;
}

const SContext = createContext<IState>({
  menuOpen: false,
  open: () => {},
  close: () => {},
});

export const StateContext = ({ children }: PropsWithChildren) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const open = () => {
    setMenuOpen(true);
    document.body.classList.add('noscroll');
  };
  const close = () => {
    setMenuOpen(false);
    document.body.classList.remove('noscroll');
  };

  const iState: IState = {
    menuOpen,
    open,
    close,
  };
  return <SContext.Provider value={iState}>{children}</SContext.Provider>;
};

export const useStateContext = () => useContext(SContext);
