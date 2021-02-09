import { ENG, PL } from 'theme/LanguageTheme';

function LanguageReducer(state, action) {
  let newState = { ...state };

  switch (action.type) {
    case 'EN':
      newState.language = 'ENG';
      newState.data = ENG;
      return newState;
    case 'PL':
      newState.language = 'PL';
      newState.data = PL;
      return newState;

    default:
      newState.language = 'ENG';
      newState.data = ENG;
      return newState;
  }
}

export default LanguageReducer;
