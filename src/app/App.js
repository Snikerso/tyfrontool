import React, { Suspense, useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainTemplate from 'modules/common/components/templates/MainTemplate/MainTemplate';

import ActualBaseReducer from 'reducers/ActualBaseReducer';
import RelayReducer from 'reducers/RelayReducer';
import AuthReducer from 'reducers/AuthReducer';
import FastWordsReducer from 'reducers/FastWordsReducer';

import { ActualBaseContext } from 'contexts/ActualBaseContext';
import { FastWordsContext } from 'contexts/FastWordsContext';
import { AuthContext } from 'contexts/AuthContext';
import { RelayContext } from 'contexts/RelayContext';

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));

function App() {
  let token = localStorage.getItem('token');
  let initialFastWords = [];
  if (JSON.parse(localStorage.getItem('fast-words')) !== null) {
    initialFastWords = JSON.parse(localStorage.getItem('fast-words'));
  }

  const [authState, authDispatch] = useReducer(AuthReducer, {
    user: { id: 1, username: 'snikers' },
    isAuth: token ? true : false,
    kids: ['wojtek'],
    actualKid: '',
    isKids: false,
    // isKids: JSON.parse(localStorage.getItem('isKids')),
  });

  const [fastWordsState, fastWordsDispatch] = useReducer(
    FastWordsReducer,
    initialFastWords
  );
  const [relayState, relayDispatch] = useReducer(RelayReducer, {
    gamename: 'FOURCHOICE',
    isAutomationDifficult: true,
    difficultylevel: 0,
    isBaseWords: true,
    fastWords: fastWordsState,
    basename: { id: 18, basename: 'dsa', author: 'snikers' },
  });

  const [actualBaseState, actualBaseDispatch] = useReducer(ActualBaseReducer, {
    words: [],
  });

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      <RelayContext.Provider value={{ relayState, relayDispatch }}>
        <FastWordsContext.Provider
          value={{ fastWordsState, fastWordsDispatch }}
        >
          <ActualBaseContext.Provider
            value={{ actualBaseState, actualBaseDispatch }}
          >
            <BrowserRouter basename="/">
              <MainTemplate>
                <Suspense fallback={<h1>Poznaj swiat wordtito</h1>}>
                  {authState.isAuth ? (
                    <AuthenticatedApp
                      authState={authState}
                      authDispatch={authDispatch}
                    />
                  ) : (
                    <UnauthenticatedApp
                      authState={authState}
                      authDispatch={authDispatch}
                    />
                  )}
                </Suspense>
              </MainTemplate>
            </BrowserRouter>
          </ActualBaseContext.Provider>
        </FastWordsContext.Provider>
      </RelayContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
