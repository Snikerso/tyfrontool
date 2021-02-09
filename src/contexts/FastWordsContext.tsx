import { createContext } from 'react';

export const FastWordsContext = createContext({
  fastWordsState: [],
  fastWordsDispatch: () => {},
});

// przechowuje dane do szybkiej gry minimun 10 słówek
