import React, { useEffect, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { LanguageContext } from 'contexts/LanguageContext';
import { ENG, PL } from 'theme/LanguageTheme';
import LanguageReducer from 'reducers/LanguageReducer';
import GlobalStyle from 'theme/GlobalStyles';
import { theme } from 'theme/MainTheme';

function MainTemplate({ children }) {
  const [languageState, languageDispatch] = useReducer(LanguageReducer, {
    language: 'ENG',
    data: ENG,
  });

  let languageIndex = navigator.language.indexOf('-');
  let language;

  if (languageIndex === -1) {
    language = navigator.language.toUpperCase();
  } else {
    language = navigator.language.slice(0, languageIndex).toUpperCase();
  }
  console.log(language);

  useEffect(() => {
    languageDispatch({
      type: language,
    });
  }, []);
  return (
    <>
      <GlobalStyle />

      <LanguageContext.Provider value={{ languageState, languageDispatch }}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </LanguageContext.Provider>
    </>
  );
}

export default MainTemplate;
