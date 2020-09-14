import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyles';
import { theme } from 'theme/MainTheme';

function MainTemplate({ children }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
export default MainTemplate;
