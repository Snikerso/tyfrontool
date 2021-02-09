import { createContext } from 'react';

export const RelayContext = createContext({
  relayState: {},
  relayDispatch: () => {},
});

//Dane przygotowane do zagrania czyli wybor gry trudnosci itp
