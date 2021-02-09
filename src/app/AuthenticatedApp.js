import React, { Suspense, useEffect, useReducer, useState } from 'react';
import { Route } from 'react-router-dom';
import { BaseContext } from 'contexts/BaseContext';
import { GameContext } from 'contexts/GameContext';

import BasesReducer from 'reducers/BasesReducer';

import AuthenticatedTemplate from 'modules/common/components/templates/AuthenticatedTemplate/AuthenticatedTemplate';

const HomePage = React.lazy(() =>
  import('modules/adult/home/components/HomePage/HomePage')
);
const CommunityPage = React.lazy(() =>
  import('modules/adult/community/components/CommunityPage/CommunityPage')
);

const GamesPage = React.lazy(() =>
  import('modules/adult/games/components/GamesPage/GamesPage')
);
const AuthenticatedKidsApp = React.lazy(() =>
  import('app/AuthenticatedKidsApp')
);
const BasesPage = React.lazy(() =>
  import('modules/adult/bases/components/BasesPage/BasesPage')
);
const WordsPage = React.lazy(() =>
  import('modules/adult/words/components/WordsPage/WordsPage')
);
const Game = React.lazy(() =>
  import('modules/common/components/organisms/gamerelay/GamePreparer')
);

function AuthenticatedApp({ authState, authDispatch }) {
  const [basesState, basesDispatch] = useReducer(BasesReducer, []);
  const [gamedata, setGamedata] = useState([{ id: 1 }]);

  useEffect(() => {
    if (authState.isAuth === true) {
      fetch('/wordlist/base/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          basesDispatch({ type: 'INIT', payload: { data: data } });
        });
    } else {
      import('assets/bases/bases.json').then((data) =>
        basesDispatch({ type: 'INIT', payload: { data: data.default.bases } })
      );
    }
  }, []);

  if (authState.isKids) {
    return (
      <AuthenticatedTemplate authState={authState} authDispatch={authDispatch}>
        <Suspense fallback={'Hello !!'}>
          <AuthenticatedKidsApp
            authState={authState}
            authDispatch={authDispatch}
          />
        </Suspense>
      </AuthenticatedTemplate>
    );
  } else {
    return (
      <>
        <BaseContext.Provider value={{ basesState, basesDispatch }}>
          <GameContext.Provider value={{ gamedata, setGamedata }}>
            <AuthenticatedTemplate
              authState={authState}
              authDispatch={authDispatch}
            >
              <Suspense fallback={'Hello !!'}>
                <Route exact path="/" render={() => <HomePage />} />
                <Route
                  exact
                  path="/community"
                  render={() => <CommunityPage />}
                />
                <Route path="/community/:id" render={() => <WordsPage />} />
                <Route exact path="/games" render={() => <GamesPage />} />
                <Route
                  exact
                  path="/game-relay/:gamename"
                  render={() => <Game />}
                />
                <Route exact path="/base" render={() => <BasesPage />} />
                <Route path="/base/:id" render={() => <WordsPage />} />
              </Suspense>
            </AuthenticatedTemplate>
          </GameContext.Provider>
        </BaseContext.Provider>
      </>
    );
  }
}

export default AuthenticatedApp;
